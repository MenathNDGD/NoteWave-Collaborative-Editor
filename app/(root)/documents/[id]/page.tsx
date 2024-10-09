import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex items-center justify-center gap-2 w-fit">
          <p className="document-title">Test</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
