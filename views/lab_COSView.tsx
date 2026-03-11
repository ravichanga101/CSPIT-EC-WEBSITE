// Mirrors: view/lab_COS.php
import LabPage from "@/components/LabPage";
import { getLabById } from "@/data/labs";

export default function LabCOSView() {
  const lab = getLabById("lab_COS")!;
  return <LabPage lab={lab} />;
}
