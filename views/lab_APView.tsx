// Mirrors: view/lab_AP.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabAPView() {
  const lab = getLabById("lab_AP")!;
  return <LabPage lab={lab} />;
}
