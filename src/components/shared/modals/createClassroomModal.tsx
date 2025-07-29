import CreateClassroomForm from "@/components/classrooms/createClassroomForm";
import ModalBase from "./modalBase";

export default function CreateClassroomModal() {
  return (
    <ModalBase title="Create Classroom" description="Create a new classroom">
      <CreateClassroomForm />
    </ModalBase>
  );
}

//TODO: Son durumda başarıyla request atıp sınıf ekledik. Hata handling ve modal içerisinde
// hata durumunda bir mesaj göstererek bu kısmı bitirebiliriz.

//Hata göster - formu temizle
//Başarılı olduysa da formu kapat.