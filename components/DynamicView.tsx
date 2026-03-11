// Mirrors: include "view/" . $page[0] . ".php"
// All PHP views have a corresponding React component registered here.

import HomeView from "@/views/HomeView";
import LabAPView from "@/views/lab_APView";
import LabCOSView from "@/views/lab_COSView";
import LabEDCView from "@/views/lab_EDCView";
import LabMASCView from "@/views/lab_MASCView";
import LabNAView from "@/views/lab_NAView";
import LabPEView from "@/views/lab_PEView";
import LabPGLView from "@/views/lab_PGLView";
import LabPLView from "@/views/lab_PLView";
// Note: lab_CS.php was fully commented out in the original — omitted here.

interface DynamicViewProps {
  view: string;
}

const viewMap: Record<string, React.ComponentType> = {
  home: HomeView,
  lab_AP: LabAPView,
  lab_COS: LabCOSView,
  lab_EDC: LabEDCView,
  lab_MASC: LabMASCView,
  lab_NA: LabNAView,
  lab_PE: LabPEView,
  lab_PGL: LabPGLView,
  lab_PL: LabPLView,
};

export default function DynamicView({ view }: DynamicViewProps) {
  const ViewComponent = viewMap[view];
  if (!ViewComponent) {
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        404 – View &quot;{view}&quot; not found.
      </div>
    );
  }
  return <ViewComponent />;
}
