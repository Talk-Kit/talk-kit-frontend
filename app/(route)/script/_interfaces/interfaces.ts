export interface Project {
  id: number;
  project: string;
}

export interface CreateScriptDraftProps {
  onSubmit: (draft: string) => void;
}

export interface CreateScriptProps {
  defaultValue?: string;
  projectList: Project[];
  onSubmit: (data: ScriptForm) => void;
}

export interface ScriptForm {
  projectSeq: number;
  fileName: string;
  fileContent: string;
}
