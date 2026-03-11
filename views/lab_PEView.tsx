// Mirrors: view/lab_PE.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabPEView() {
  const lab = getLabById("lab_PE")!;
  return <LabPage lab={lab} />;
}
