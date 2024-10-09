"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.actions";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();

  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });

      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(`Error occurred while creating a new document: ${error}`);
    }
  };

  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image
        src={"/assets/icons/add.svg"}
        alt="Add"
        width={24}
        height={24}
        className="bg-blue-900 rounded-full"
      />
      <p className="hidden sm:block">Start a Blank Document</p>
    </Button>
  );
};

export default AddDocumentBtn;
