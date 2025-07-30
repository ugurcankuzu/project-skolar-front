"use client";

import {
  JoinClassroomFormSchema,
  JoinClassroomFormValues,
} from "@/types/joinClassroomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../shared/input";
import Loader from "../shared/loader";
import useLoading from "@/hooks/useLoading";
import useToast from "@/hooks/useToast";
import PopUp from "../shared/popup";
import EPopupColors from "@/enums/popupColors";
import joinClassroom from "@/helpers/joinClassroom";
import { mutate } from "swr";
import { useModal } from "@/store/modalStore";

export default function JoinClassroomForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setValue,
    setFocus,
  } = useForm<JoinClassroomFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(JoinClassroomFormSchema),
  });

  const { loading, startLoading, stopLoading } = useLoading();
  const { message, type, showToast } = useToast();
  const { closeModal } = useModal()!;
  const submitHandler = async (data: JoinClassroomFormValues) => {
    startLoading();
    try {
      const joinCode = Object.values(data).join("");
      const res = await joinClassroom(joinCode);
      if (res.success) {
        mutate("classroomsSummary");
        reset();
        clearErrors();
        closeModal();
      } else {
        showToast(res.message ?? "An unexpected error occured.", "error");
      }
    } catch (err) {
      showToast("An unexpected error occured.", "error");
    } finally {
      stopLoading();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.ctrlKey && e.key.toLowerCase() === "v") {
      return;
    }

    const target = e.target as HTMLInputElement;
    const fieldName = `char${index + 1}` as keyof JoinClassroomFormValues;

    if (e.key === "Backspace") {
      if (target.value === "" && index > 0) {
        e.preventDefault();
        setFocus(`char${index}` as keyof JoinClassroomFormValues);
      } else {
        setValue(fieldName, "");
      }
      return;
    }

    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      setFocus(`char${index}` as keyof JoinClassroomFormValues);
    }
    if (e.key === "ArrowRight" && index < 5) {
      e.preventDefault();
      setFocus(`char${index + 2}` as keyof JoinClassroomFormValues);
    }

    if (/^[a-zA-Z0-9]$/.test(e.key)) {
      e.preventDefault(); // Prevent double input
      setValue(fieldName, e.key.toUpperCase());
      if (index < 5) {
        setFocus(`char${index + 2}` as keyof JoinClassroomFormValues);
      } else {
        handleSubmit(submitHandler)();
      }
    }
  };

  /**
   * Handles pasting into the input fields. This works for both
   * desktop (right-click, Ctrl+V) and mobile (long-press, paste).
   */
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "") // Sanitize the input
      .slice(0, 6);

    pastedData.split("").forEach((char, i) => {
      setValue(`char${i + 1}` as keyof JoinClassroomFormValues, char);
    });

    clearErrors(); // Clear any previous errors

    // Move focus to the next empty input or submit if full
    const nextFocusIndex = pastedData.length;
    if (nextFocusIndex < 6) {
      setFocus(`char${nextFocusIndex + 1}` as keyof JoinClassroomFormValues);
    } else {
      handleSubmit(submitHandler)();
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitHandler)}
      noValidate
    >
      {message && (
        <div>
          <PopUp
            popupColor={
              type === "success" ? EPopupColors.SUCCESS : EPopupColors.ERROR
            }
            popupMessage={message}
          />
        </div>
      )}
      <div className="space-y-2">
        <label htmlFor="char1" className="font-semibold">
          Join Code
        </label>
        {/* The onPaste handler on the parent div captures the event for all children */}
        <div className="flex gap-2" onPaste={handlePaste}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-full">
              <Input
                id={`char${index + 1}`}
                maxLength={1}
                {...register(
                  `char${index + 1}` as keyof JoinClassroomFormValues
                )}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="text-center text-xl font-semibold uppercase"
                autoComplete="off"
              />
            </div>
          ))}
        </div>
        {Object.values(errors).map(
          (error, index) =>
            error.message && (
              <p
                key={index}
                className="text-red-500 bg-error/30 rounded-xl px-4 py-1"
              >
                {error.message}
              </p>
            )
        )}
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          className="bg-surface text-primary font-semibold px-4 py-2 rounded-full border border-secondary hover:bg-secondary/90 hover:text-white transition-colors cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300"
          type="button"
          disabled={loading}
          onClick={() => {
            reset({
              char1: "",
              char2: "",
              char3: "",
              char4: "",
              char5: "",
              char6: "",
            });
            clearErrors();
            setFocus("char1");
          }}
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-primary text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer disabled:bg-surface disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-surface"
          disabled={loading}
        >
          {loading ? <Loader /> : "Join"}
        </button>
      </div>
    </form>
  );
}
