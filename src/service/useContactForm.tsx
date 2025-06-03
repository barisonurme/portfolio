import type { FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import type { FormData } from "../sections/contact";
import { useState } from "react";
import { toast } from "sonner";

const useContactForm = (app: FirebaseApp) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const db = getFirestore(app);

  const fetchContactForm = async (formData: FormData) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const docRef = collection(db, "messages");
      await addDoc(docRef, { data: formData });
      toast("Message Sended!");
    } catch {
      toast("Error while sending form!");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchContactForm,
    isLoading,
    isError,
  };
};

export default useContactForm;
