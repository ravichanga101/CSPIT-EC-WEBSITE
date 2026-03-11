// Mirrors: view/lab_PL.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabPLView() {
  const lab = getLabById("lab_PL")!;
  return <LabPage lab={lab} />;
}
