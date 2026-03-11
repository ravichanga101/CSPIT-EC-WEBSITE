// Mirrors: view/lab_PGL.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabPGLView() {
  const lab = getLabById("lab_PGL")!;
  return <LabPage lab={lab} />;
}
