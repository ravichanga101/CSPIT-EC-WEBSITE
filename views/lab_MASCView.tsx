// Mirrors: view/lab_MASC.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabMASCView() {
  const lab = getLabById("lab_MASC")!;
  return <LabPage lab={lab} />;
}
