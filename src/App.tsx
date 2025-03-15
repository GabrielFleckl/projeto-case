import Navbar from "@/components/Navbar/Index";

import { Container } from "@/components/Container/Index";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function App() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [wordValue, setWordValue] = useState<number>(0);
  const [letterValue, setLetterValue] = useState<number>(0);

  const handleUpperCaseClick = () => {
    const upperCaseText = textAreaValue.toUpperCase();
    setTextAreaValue(upperCaseText);
  };

  const handleLowerCaseClick = () => {
    const upperCaseText = textAreaValue.toLowerCase();
    setTextAreaValue(upperCaseText);
  };

  const handleTitleCaseClick = () => {
    const string = textAreaValue;
    const stringLower = string.toLowerCase();
    function capitalizeWords(text: string) {
      const words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      const capitalizedText = words.join(" ");
      return capitalizedText;
    }
    const titleCase = capitalizeWords(stringLower);
    setTextAreaValue(titleCase);
  };

  const handleClearTextAreaClick = () => {
    setTextAreaValue("");
    toast.success("Text Clear Successfully!", {
      richColors: true,
    });
  };

  const handleCopyTextAreaClick = () => {
    navigator.clipboard.writeText(textAreaValue);
    setTextAreaValue("");
    toast.success("Text Copied Successfully!", {
      richColors: true,
    });
  };

  useEffect(() => {
    const wordValue = textAreaValue.trim().split(/\s+/).length;
    setWordValue(wordValue);

    const letterValue = textAreaValue.trim().length;
    setLetterValue(letterValue);
  }, [textAreaValue]);

  return (
    <>
      <Navbar />
      <Container className="flex w-full flex-col items-center justify-center gap-5 px-4">
        <div className="flex flex-wrap items-center justify-start gap-2 md:justify-center">
          <Button onClick={handleUpperCaseClick} size={"lg"}>
            Uppercase
          </Button>
          <Button onClick={handleLowerCaseClick} size={"lg"}>
            Lowercase
          </Button>
          <Button onClick={handleTitleCaseClick} size={"lg"}>
            Title Case
          </Button>
          <Button onClick={handleClearTextAreaClick} size={"lg"}>
            Clear
          </Button>
          <Button onClick={handleCopyTextAreaClick} size={"lg"}>
            Copy
          </Button>
        </div>
        <div className="w-full">
          <Textarea
            className="h-80"
            placeholder="Write or paste your text here!"
            onChange={(e) => setTextAreaValue(e.target.value)}
            value={textAreaValue}
          />
        </div>
        <div className="flex flex-col text-center md:flex-row md:gap-4">
          <div className="text-sm">
            <p>
              Word Count: <span> {wordValue === 1 ? "0" : wordValue} </span>
            </p>
          </div>
          <div className="text-sm">
            <p>
              Letter Count: <span> {letterValue} </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
