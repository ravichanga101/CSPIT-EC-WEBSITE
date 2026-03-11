// Mirrors: view/lab_EDC.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabEDCView() {
  const lab = getLabById("lab_EDC")!;
  return <LabPage lab={lab} />;
}
