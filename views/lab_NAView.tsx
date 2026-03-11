// Mirrors: view/lab_NA.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabNAView() {
  const lab = getLabById("lab_NA")!;
  return <LabPage lab={lab} />;
}
