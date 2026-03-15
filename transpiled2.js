import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Report.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=aa33dd6f"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=aa33dd6f"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useEffect = __vite__cjsImport1_react["useEffect"]; const useState = __vite__cjsImport1_react["useState"];
import { useParams, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=aa33dd6f";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "/node_modules/.vite/deps/recharts.js?v=aa33dd6f";
import {
  Globe,
  Download,
  ChevronLeft,
  Info,
  FileText,
  Activity,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from "/node_modules/.vite/deps/lucide-react.js?v=aa33dd6f";
import { useScan } from "/src/context/ScanContext.jsx?t=1773072999683";
import AnoAI from "/src/components/AnoAI.jsx?t=1773072913889";
const cn = (...classes) => classes.filter(Boolean).join(" ");
const GlitchBackground = ({ active }) => {
  if (!active) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-red-500/20 mix-blend-overlay animate-glitch-primary" }, void 0, false, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("style", { children: `
        @keyframes glitch-primary {
          0% { clip-path: inset(10% 0 80% 0); transform: translateX(-10px); }
          5% { clip-path: inset(50% 0 10% 0); transform: translateX(10px); }
          10% { clip-path: inset(20% 0 60% 0); transform: translateX(-5px); }
          15% { clip-path: inset(80% 0 5% 0); transform: translateX(5px); }
          20% { clip-path: none; transform: none; }
        }
        .animate-glitch-primary {
          animation: glitch-primary 0.5s steps(2) infinite;
        }
      ` }, void 0, false, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};
_c = GlitchBackground;
const StatCard = ({ label, value, sub, colorClass }) => /* @__PURE__ */ jsxDEV("div", { className: "bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 rounded-2xl p-6 flex flex-col justify-between", children: [
  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-mono text-[#FAF8F5]/30 uppercase tracking-[0.2em] mb-4", children: label }, void 0, false, {
    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
    lineNumber: 43,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("div", { className: cn("text-4xl font-black font-mono mb-1", colorClass), children: value }, void 0, false, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-mono text-[#FAF8F5]/20 uppercase tracking-widest", children: sub }, void 0, false, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
    lineNumber: 44,
    columnNumber: 9
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
  lineNumber: 42,
  columnNumber: 1
}, this);
_c2 = StatCard;
export default function Report() {
  _s();
  const { id } = useParams();
  const navigate = useNavigate();
  const { report, generateMockReport, sessionId, updateSessionId, shareId, updateShareId, shareUrl } = useScan();
  const [isDataSovereigntyExpanded, setIsDataSovereigntyExpanded] = useState(false);
  useEffect(() => {
    if (!report && id === "demo-001") {
      generateMockReport("demo-001");
    }
  }, [id, report, generateMockReport]);
  if (!report) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex items-center justify-center bg-[#0D0D12]", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxDEV(Activity, { className: "mx-auto text-[#F59E0B] animate-spin", size: 32 }, void 0, false, {
        fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "font-mono text-sm text-[#FAF8F5]/40 uppercase tracking-widest", children: "Hydrating Report Data..." }, void 0, false, {
        fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this);
  }
  const isHighConfidence = report?.confidence_score > 0.8;
  const downloadReport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `GHS_Report_${report?.id}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "relative min-h-screen bg-[#0D0D12] overflow-x-hidden", children: [
    /* @__PURE__ */ jsxDEV(AnoAI, {}, void 0, false, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 88,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(GlitchBackground, { active: report?.confidence_score > 0.8 }, void 0, false, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 89,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("nav", { className: "flex items-center justify-between py-6 px-10 border-b border-[#FAF8F5]/5 bg-[#0D0D12]/80 backdrop-blur-xl sticky top-0 z-[100]", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => navigate("/dashboard"),
          className: "flex items-center gap-2 text-[#FAF8F5]/40 hover:text-[#F59E0B] transition-colors font-mono text-[10px] uppercase tracking-widest",
          children: [
            /* @__PURE__ */ jsxDEV(ChevronLeft, { size: 14 }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 96,
              columnNumber: 21
            }, this),
            " Back to Hub"
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 92,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(FileText, { size: 16, className: "text-[#F59E0B]" }, void 0, false, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 99,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-xs uppercase tracking-[0.2em]", children: [
          "HypothesisID: ",
          report?.id
        ] }, void 0, true, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 100,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: downloadReport,
          className: "bg-[#F59E0B]/10 hover:bg-[#F59E0B] hover:text-[#0D0D12] border border-[#F59E0B]/20 text-[#F59E0B] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxDEV(Download, { size: 14 }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 106,
              columnNumber: 21
            }, this),
            " Export JSON"
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 102,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "relative z-10 p-10 max-w-screen-xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: cn(
        "rounded-[2.5rem] p-12 relative overflow-hidden flex flex-col items-center justify-center text-center",
        isHighConfidence ? "bg-red-500/10 border border-red-500/30" : "bg-green-500/10 border border-green-500/30"
      ), children: [
        /* @__PURE__ */ jsxDEV("div", { className: cn(
          "absolute inset-0 opacity-10 pointer-events-none",
          isHighConfidence ? "bg-[radial-gradient(circle_at_center,red_0%,transparent_70%)]" : "bg-[radial-gradient(circle_at_center,green_0%,transparent_70%)]"
        ) }, void 0, false, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 116,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-7xl font-black uppercase tracking-tighter mb-4 leading-none inline-block font-sans", children: [
            isHighConfidence ? "Outbreak Hypothesis" : "Monitoring Phase",
            /* @__PURE__ */ jsxDEV("span", { className: cn("block italic font-serif normal-case font-light text-5xl mt-2", isHighConfidence ? "text-red-500" : "text-green-500"), children: isHighConfidence ? "Confirmed Detection" : "No Cluster Detected" }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 123,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 121,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-4 mt-8", children: [
            /* @__PURE__ */ jsxDEV("span", { className: cn(
              "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em]",
              isHighConfidence ? "bg-red-500 text-white" : "bg-green-500 text-white"
            ), children: [
              "Response Tier: ",
              report?.response_tier
            ] }, void 0, true, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 128,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "bg-[#FAF8F5]/10 border border-[#FAF8F5]/10 px-6 py-2 rounded-full text-[10px] font-mono text-[#FAF8F5]/60 uppercase tracking-widest", children: [
              "Confidence Level: ",
              (report?.confidence_score * 100).toFixed(0),
              "%"
            ] }, void 0, true, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 134,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 127,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 120,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxDEV(StatCard, { label: "Primary Syndrome", value: "ILI", sub: "Influenza-Like Illness", colorClass: "text-[#F59E0B]" }, void 0, false, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 143,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV(StatCard, { label: "Affected Nodes", value: (report?.affected_countries || []).length, sub: "Sovereign CountryAgents", colorClass: "text-[#FAF8F5]" }, void 0, false, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 144,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV(StatCard, { label: "Time Window", value: "72H", sub: "Rolling Precision Scan", colorClass: "text-[#FAF8F5]" }, void 0, false, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 145,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV(StatCard, { label: "Signal Source", value: "OSINT", sub: "Federated Correlation", colorClass: "text-[#FAF8F5]" }, void 0, false, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 146,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
        lineNumber: 142,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 rounded-[2.5rem] p-10 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold uppercase tracking-widest text-xs text-[#FAF8F5]/40", children: "Geographic Signal Strength" }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 153,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV(Globe, { size: 16, className: "text-[#FAF8F5]/20" }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 154,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 152,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-[300px]", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { data: report?.affected_countries || [], children: [
            /* @__PURE__ */ jsxDEV(XAxis, { dataKey: "code", axisLine: false, tickLine: false, tick: { fill: "#FAF8F544", fontSize: 10, fontFamily: "monospace" } }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 159,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV(
              Tooltip,
              {
                cursor: { fill: "#FAF8F508" },
                contentStyle: { backgroundColor: "#1A1A1A", borderColor: "#F59E0B33", borderRadius: "1rem", color: "#FAF8F5" }
              },
              void 0,
              false,
              {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 160,
                columnNumber: 37
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Bar, { dataKey: "cases", radius: [4, 4, 0, 0], children: (report?.affected_countries || []).map(
              (entry, index) => /* @__PURE__ */ jsxDEV(Cell, { fill: entry.confidence > 0.75 ? "#F59E0B" : "#F59E0B66" }, index, false, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 166,
                columnNumber: 21
              }, this)
            ) }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 164,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 158,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 157,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 156,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 151,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 rounded-[2.5rem] p-10 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold uppercase tracking-widest text-xs text-[#FAF8F5]/40", children: "WHO Syndrome Profile" }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 176,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV(Activity, { size: 16, className: "text-[#FAF8F5]/20" }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 177,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 175,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-[300px]", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(RadarChart, { cx: "50%", cy: "50%", outerRadius: "80%", data: report?.syndrome_data || [], children: [
            /* @__PURE__ */ jsxDEV(PolarGrid, { stroke: "#FAF8F511" }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 182,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV(PolarAngleAxis, { dataKey: "name", tick: { fill: "#FAF8F544", fontSize: 8, fontFamily: "monospace" } }, void 0, false, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 183,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV(
              Radar,
              {
                name: "Signal Strength",
                dataKey: "value",
                stroke: "#F59E0B",
                fill: "#F59E0B",
                fillOpacity: 0.3
              },
              void 0,
              false,
              {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 184,
                columnNumber: 37
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 181,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 180,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 179,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 174,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
        lineNumber: 150,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2 space-y-8", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 rounded-[2.5rem] p-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold uppercase tracking-tight mb-8", children: "Hypothesis Evidence" }, void 0, false, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 201,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: (report?.evidence_sources || []).map(
            (src, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between p-4 bg-[#0D0D12] rounded-xl border border-[#FAF8F5]/5 group hover:border-[#F59E0B]/30 transition-colors", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-full bg-[#FAF8F5]/5 flex items-center justify-center text-[#F59E0B]", children: /* @__PURE__ */ jsxDEV(Info, { size: 14 }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 207,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 206,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono text-[#FAF8F5]/60", children: src.name }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 209,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 205,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("a", { href: src.url, className: "text-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxDEV(ArrowUpRight, { size: 14 }, void 0, false, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 212,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 211,
                columnNumber: 41
              }, this)
            ] }, i, true, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 204,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 202,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 200,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 199,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 rounded-[2.5rem] p-10 space-y-8 mb-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold uppercase tracking-tight text-sm", children: "Intelligence Sharing" }, void 0, false, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 223,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV(Zap, { size: 14, className: "text-[#F59E0B]" }, void 0, false, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 224,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 222,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] font-mono text-[#FAF8F5]/30 uppercase tracking-widest", children: "Session ID" }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 229,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "text",
                    value: sessionId,
                    onChange: (e) => updateSessionId(e.target.value),
                    className: "w-full bg-[#0D0D12] border border-[#FAF8F5]/10 rounded-xl px-4 py-2 text-[10px] font-mono text-[#F59E0B] focus:border-[#F59E0B]/50 outline-none transition-colors"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                    lineNumber: 230,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 228,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] font-mono text-[#FAF8F5]/30 uppercase tracking-widest", children: "Share ID" }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 238,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "text",
                    value: shareId,
                    onChange: (e) => updateShareId(e.target.value),
                    className: "w-full bg-[#0D0D12] border border-[#FAF8F5]/10 rounded-xl px-4 py-2 text-[10px] font-mono text-[#F59E0B] focus:border-[#F59E0B]/50 outline-none transition-colors"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                    lineNumber: 239,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 237,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "pt-4 border-t border-[#FAF8F5]/5 space-y-2", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] font-mono text-[#FAF8F5]/30 uppercase tracking-widest", children: "Share URL" }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 247,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0D0D12] p-3 rounded-xl border border-[#FAF8F5]/10 break-all", children: /* @__PURE__ */ jsxDEV("a", { href: shareUrl, target: "_blank", rel: "noopener noreferrer", className: "text-[9px] font-mono text-[#F59E0B]/80 hover:text-[#F59E0B] transition-colors leading-relaxed", children: shareUrl }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 249,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 248,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                lineNumber: 246,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 227,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
            lineNumber: 221,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: cn(
                "bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 rounded-[2.5rem] p-10 transition-all duration-500 overflow-hidden",
                isDataSovereigntyExpanded ? "h-auto" : "h-[200px]"
              ),
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-8", children: [
                  /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "text-green-500" }, void 0, false, {
                    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                    lineNumber: 264,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-bold uppercase tracking-tight text-sm", children: "Data Sovereignty Proof" }, void 0, false, {
                    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                    lineNumber: 265,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 263,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 16, className: "text-green-500" }, void 0, false, {
                      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                      lineNumber: 269,
                      columnNumber: 37
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-mono text-[#FAF8F5]/60", children: "ZERO RAW DATA LEAKED" }, void 0, false, {
                      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                      lineNumber: 270,
                      columnNumber: 37
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                    lineNumber: 268,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] leading-relaxed text-[#FAF8F5]/30 italic", children: "Federated learning audit logs confirm only vector embeddings and statistical summaries were shared via ASI:One relay." }, void 0, false, {
                    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                    lineNumber: 272,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setIsDataSovereigntyExpanded(!isDataSovereigntyExpanded),
                      className: "text-[9px] font-mono uppercase tracking-[0.2em] text-[#F59E0B] hover:underline",
                      children: isDataSovereigntyExpanded ? "Collapse Audit Log" : "View Full Certificate"
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                      lineNumber: 275,
                      columnNumber: 33
                    },
                    this
                  ),
                  isDataSovereigntyExpanded && /* @__PURE__ */ jsxDEV("div", { className: "pt-4 border-t border-[#FAF8F5]/5 mt-4 space-y-2", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[8px] font-mono text-[#FAF8F5]/20", children: "ID: SOV-992-GHS-CERT" }, void 0, false, {
                      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                      lineNumber: 283,
                      columnNumber: 41
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[8px] font-mono text-green-500/50 underline", children: "SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" }, void 0, false, {
                      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                      lineNumber: 284,
                      columnNumber: 41
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                    lineNumber: 282,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
                  lineNumber: 267,
                  columnNumber: 29
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 257,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
          lineNumber: 220,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
        lineNumber: 198,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
      lineNumber: 110,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
_s(Report, "QOcn5AXXmV5TY+AyvgTgcPjU244=", false, function() {
  return [useParams, useNavigate, useScan];
});
_c3 = Report;
var _c, _c2, _c3;
$RefreshReg$(_c, "GlitchBackground");
$RefreshReg$(_c2, "StatCard");
$RefreshReg$(_c3, "Report");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QSxvQkFKeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUtBO0FBQUEsa0JBQ0NBLDZCQUNHLHVCQUFDLFNBQUksV0FBVSxtREFDWDtBQUFBLDJDQUFDLFNBQUksV0FBVSwwQ0FBeUMsb0NBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTRFO0FBQUEsb0JBQzVFLHVCQUFDLFNBQUksV0FBVSxvREFBbUQsd0ZBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTBJO0FBQUEsdUJBRjlJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR0E7QUFBQSxxQkFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFvQkE7QUFBQTtBQUFBO0FBQUEsWUE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBK0JBO0FBQUEsYUFwRUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXFFQTtBQUFBLFdBM0ZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE0RkE7QUFBQSxTQXBMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcUxBO0FBQUEsT0E1TUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTZNQTtBQUVSO0FBQUNWLEdBblB1QkQsUUFBTTtBQUFBLFVBQ1h6QyxXQUNFQyxhQUNvRndCLE9BQU87QUFBQTtBQUFBLE1BSHhGZ0I7QUFBTSxJQUFBUCxJQUFBTSxLQUFBb0Q7QUFBQSxhQUFBMUQsSUFBQTtBQUFBLGFBQUFNLEtBQUE7QUFBQSxhQUFBb0QsS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VOYXZpZ2F0ZSIsIkJhckNoYXJ0IiwiQmFyIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkNlbGwiLCJSYWRhciIsIlJhZGFyQ2hhcnQiLCJQb2xhckdyaWQiLCJQb2xhckFuZ2xlQXhpcyIsIlBvbGFyUmFkaXVzQXhpcyIsIkdsb2JlIiwiRG93bmxvYWQiLCJDaGV2cm9uTGVmdCIsIkluZm8iLCJGaWxlVGV4dCIsIkFjdGl2aXR5IiwiWmFwIiwiU2hpZWxkQ2hlY2siLCJDaGVja0NpcmNsZTIiLCJBcnJvd1VwUmlnaHQiLCJ1c2VTY2FuIiwiQW5vQUkiLCJjbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkdsaXRjaEJhY2tncm91bmQiLCJhY3RpdmUiLCJfYyIsIlN0YXRDYXJkIiwibGFiZWwiLCJ2YWx1ZSIsInN1YiIsImNvbG9yQ2xhc3MiLCJfYzIiLCJSZXBvcnQiLCJfcyIsImlkIiwibmF2aWdhdGUiLCJyZXBvcnQiLCJnZW5lcmF0ZU1vY2tSZXBvcnQiLCJzZXNzaW9uSWQiLCJ1cGRhdGVTZXNzaW9uSWQiLCJzaGFyZUlkIiwidXBkYXRlU2hhcmVJZCIsInNoYXJlVXJsIiwiaXNEYXRhU292ZXJlaWdudHlFeHBhbmRlZCIsInNldElzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQiLCJpc0hpZ2hDb25maWRlbmNlIiwiY29uZmlkZW5jZV9zY29yZSIsImRvd25sb2FkUmVwb3J0IiwiZGF0YVN0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkb3dubG9hZEFuY2hvck5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZSIsInJlc3BvbnNlX3RpZXIiLCJ0b0ZpeGVkIiwiYWZmZWN0ZWRfY291bnRyaWVzIiwibGVuZ3RoIiwiZmlsbCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiY29uZmlkZW5jZSIsInN5bmRyb21lX2RhdGEiLCJldmlkZW5jZV9zb3VyY2VzIiwic3JjIiwiaSIsIm5hbWUiLCJ1cmwiLCJlIiwidGFyZ2V0IiwiX2MzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlJlcG9ydC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtcclxuICAgIEJhckNoYXJ0LCBCYXIsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgQ2VsbCxcclxuICAgIFJhZGFyLCBSYWRhckNoYXJ0LCBQb2xhckdyaWQsIFBvbGFyQW5nbGVBeGlzLCBQb2xhclJhZGl1c0F4aXNcclxufSBmcm9tICdyZWNoYXJ0cyc7XHJcbmltcG9ydCB7XHJcbiAgICBHbG9iZSwgRG93bmxvYWQsIENoZXZyb25MZWZ0LFxyXG4gICAgSW5mbywgRmlsZVRleHQsIEFjdGl2aXR5LCBaYXAsIFNoaWVsZENoZWNrLCBDaGVja0NpcmNsZTIsIEFycm93VXBSaWdodFxyXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNjYW4gfSBmcm9tICcuLi9jb250ZXh0L1NjYW5Db250ZXh0JztcclxuaW1wb3J0IEFub0FJIGZyb20gJy4uL2NvbXBvbmVudHMvQW5vQUknO1xyXG5cclxuY29uc3QgY24gPSAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG5cclxuLy8gLS0tIE5BVElWRSBFRkZFQ1RTIC0tLVxyXG5cclxuY29uc3QgR2xpdGNoQmFja2dyb3VuZCA9ICh7IGFjdGl2ZSB9KSA9PiB7XHJcbiAgICBpZiAoIWFjdGl2ZSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTAgcG9pbnRlci1ldmVudHMtbm9uZSBvdmVyZmxvdy1oaWRkZW4gb3BhY2l0eS0yMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctcmVkLTUwMC8yMCBtaXgtYmxlbmQtb3ZlcmxheSBhbmltYXRlLWdsaXRjaC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgQGtleWZyYW1lcyBnbGl0Y2gtcHJpbWFyeSB7XHJcbiAgICAgICAgICAwJSB7IGNsaXAtcGF0aDogaW5zZXQoMTAlIDAgODAlIDApOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XHJcbiAgICAgICAgICA1JSB7IGNsaXAtcGF0aDogaW5zZXQoNTAlIDAgMTAlIDApOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7IH1cclxuICAgICAgICAgIDEwJSB7IGNsaXAtcGF0aDogaW5zZXQoMjAlIDAgNjAlIDApOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7IH1cclxuICAgICAgICAgIDE1JSB7IGNsaXAtcGF0aDogaW5zZXQoODAlIDAgNSUgMCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XHJcbiAgICAgICAgICAyMCUgeyBjbGlwLXBhdGg6IG5vbmU7IHRyYW5zZm9ybTogbm9uZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYW5pbWF0ZS1nbGl0Y2gtcHJpbWFyeSB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGdsaXRjaC1wcmltYXJ5IDAuNXMgc3RlcHMoMikgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gLS0tIENPTVBPTkVOVFMgLS0tXHJcblxyXG5jb25zdCBTdGF0Q2FyZCA9ICh7IGxhYmVsLCB2YWx1ZSwgc3ViLCBjb2xvckNsYXNzIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGQUY4RjVdLzUgYm9yZGVyIGJvcmRlci1bI0ZBRjhGNV0vMTAgcm91bmRlZC0yeGwgcC02IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tb25vIHRleHQtWyNGQUY4RjVdLzMwIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIG1iLTRcIj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcInRleHQtNHhsIGZvbnQtYmxhY2sgZm9udC1tb25vIG1iLTFcIiwgY29sb3JDbGFzcyl9Pnt2YWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vMjAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPntzdWJ9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcG9ydCgpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgeyByZXBvcnQsIGdlbmVyYXRlTW9ja1JlcG9ydCwgc2Vzc2lvbklkLCB1cGRhdGVTZXNzaW9uSWQsIHNoYXJlSWQsIHVwZGF0ZVNoYXJlSWQsIHNoYXJlVXJsIH0gPSB1c2VTY2FuKCk7XHJcbiAgICBjb25zdCBbaXNEYXRhU292ZXJlaWdudHlFeHBhbmRlZCwgc2V0SXNEYXRhU292ZXJlaWdudHlFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXJlcG9ydCAmJiBpZCA9PT0gJ2RlbW8tMDAxJykge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZU1vY2tSZXBvcnQoJ2RlbW8tMDAxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkLCByZXBvcnQsIGdlbmVyYXRlTW9ja1JlcG9ydF0pO1xyXG5cclxuICAgIGlmICghcmVwb3J0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctWyMwRDBEMTJdXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eSBjbGFzc05hbWU9XCJteC1hdXRvIHRleHQtWyNGNTlFMEJdIGFuaW1hdGUtc3BpblwiIHNpemU9ezMyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyNGQUY4RjVdLzQwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5IeWRyYXRpbmcgUmVwb3J0IERhdGEuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0hpZ2hDb25maWRlbmNlID0gcmVwb3J0Py5jb25maWRlbmNlX3Njb3JlID4gMC44O1xyXG5cclxuICAgIGNvbnN0IGRvd25sb2FkUmVwb3J0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocmVwb3J0LCBudWxsLCAyKSk7XHJcbiAgICAgICAgY29uc3QgZG93bmxvYWRBbmNob3JOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGRhdGFTdHIpO1xyXG4gICAgICAgIGRvd25sb2FkQW5jaG9yTm9kZS5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBgR0hTX1JlcG9ydF8ke3JlcG9ydD8uaWR9Lmpzb25gKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkQW5jaG9yTm9kZSk7XHJcbiAgICAgICAgZG93bmxvYWRBbmNob3JOb2RlLmNsaWNrKCk7XHJcbiAgICAgICAgZG93bmxvYWRBbmNob3JOb2RlLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuIGJnLVsjMEQwRDEyXSBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8QW5vQUkgLz5cclxuICAgICAgICAgICAgPEdsaXRjaEJhY2tncm91bmQgYWN0aXZlPXtyZXBvcnQ/LmNvbmZpZGVuY2Vfc2NvcmUgPiAwLjh9IC8+XHJcblxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS02IHB4LTEwIGJvcmRlci1iIGJvcmRlci1bI0ZBRjhGNV0vNSBiZy1bIzBEMEQxMl0vODAgYmFja2Ryb3AtYmx1ci14bCBzdGlja3kgdG9wLTAgei1bMTAwXVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvZGFzaGJvYXJkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bI0ZBRjhGNV0vNDAgaG92ZXI6dGV4dC1bI0Y1OUUwQl0gdHJhbnNpdGlvbi1jb2xvcnMgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBzaXplPXsxNH0gLz4gQmFjayB0byBIdWJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWxlVGV4dCBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1bI0Y1OUUwQl1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dXCI+SHlwb3RoZXNpc0lEOiB7cmVwb3J0Py5pZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkb3dubG9hZFJlcG9ydH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0Y1OUUwQl0vMTAgaG92ZXI6YmctWyNGNTlFMEJdIGhvdmVyOnRleHQtWyMwRDBEMTJdIGJvcmRlciBib3JkZXItWyNGNTlFMEJdLzIwIHRleHQtWyNGNTlFMEJdIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1bMTBweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBzaXplPXsxNH0gLz4gRXhwb3J0IEpTT05cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgcC0xMCBtYXgtdy1zY3JlZW4teGwgbXgtYXV0byBzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBTVEFUVVMgSEVSTyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICBcInJvdW5kZWQtWzIuNXJlbV0gcC0xMiByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBpc0hpZ2hDb25maWRlbmNlID8gXCJiZy1yZWQtNTAwLzEwIGJvcmRlciBib3JkZXItcmVkLTUwMC8zMFwiIDogXCJiZy1ncmVlbi01MDAvMTAgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAvMzBcIlxyXG4gICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS0xMCBwb2ludGVyLWV2ZW50cy1ub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlnaENvbmZpZGVuY2UgPyBcImJnLVtyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2F0X2NlbnRlcixyZWRfMCUsdHJhbnNwYXJlbnRfNzAlKV1cIiA6IFwiYmctW3JhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfY2VudGVyLGdyZWVuXzAlLHRyYW5zcGFyZW50XzcwJSldXCJcclxuICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC03eGwgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciBtYi00IGxlYWRpbmctbm9uZSBpbmxpbmUtYmxvY2sgZm9udC1zYW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNIaWdoQ29uZmlkZW5jZSA/IFwiT3V0YnJlYWsgSHlwb3RoZXNpc1wiIDogXCJNb25pdG9yaW5nIFBoYXNlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NuKFwiYmxvY2sgaXRhbGljIGZvbnQtc2VyaWYgbm9ybWFsLWNhc2UgZm9udC1saWdodCB0ZXh0LTV4bCBtdC0yXCIsIGlzSGlnaENvbmZpZGVuY2UgPyBcInRleHQtcmVkLTUwMFwiIDogXCJ0ZXh0LWdyZWVuLTUwMFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzSGlnaENvbmZpZGVuY2UgPyBcIkNvbmZpcm1lZCBEZXRlY3Rpb25cIiA6IFwiTm8gQ2x1c3RlciBEZXRlY3RlZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IG10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweC02IHB5LTIgcm91bmRlZC1mdWxsIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuM2VtXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlnaENvbmZpZGVuY2UgPyBcImJnLXJlZC01MDAgdGV4dC13aGl0ZVwiIDogXCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNwb25zZSBUaWVyOiB7cmVwb3J0Py5yZXNwb25zZV90aWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctWyNGQUY4RjVdLzEwIGJvcmRlciBib3JkZXItWyNGQUY4RjVdLzEwIHB4LTYgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1bMTBweF0gZm9udC1tb25vIHRleHQtWyNGQUY4RjVdLzYwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWRlbmNlIExldmVsOiB7KHJlcG9ydD8uY29uZmlkZW5jZV9zY29yZSAqIDEwMCkudG9GaXhlZCgwKX0lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1FVFJJQ1MgR1JJRCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cIlByaW1hcnkgU3luZHJvbWVcIiB2YWx1ZT1cIklMSVwiIHN1Yj1cIkluZmx1ZW56YS1MaWtlIElsbG5lc3NcIiBjb2xvckNsYXNzPVwidGV4dC1bI0Y1OUUwQl1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cIkFmZmVjdGVkIE5vZGVzXCIgdmFsdWU9eyhyZXBvcnQ/LmFmZmVjdGVkX2NvdW50cmllcyB8fCBbXSkubGVuZ3RofSBzdWI9XCJTb3ZlcmVpZ24gQ291bnRyeUFnZW50c1wiIGNvbG9yQ2xhc3M9XCJ0ZXh0LVsjRkFGOEY1XVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwiVGltZSBXaW5kb3dcIiB2YWx1ZT1cIjcySFwiIHN1Yj1cIlJvbGxpbmcgUHJlY2lzaW9uIFNjYW5cIiBjb2xvckNsYXNzPVwidGV4dC1bI0ZBRjhGNV1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cIlNpZ25hbCBTb3VyY2VcIiB2YWx1ZT1cIk9TSU5UXCIgc3ViPVwiRmVkZXJhdGVkIENvcnJlbGF0aW9uXCIgY29sb3JDbGFzcz1cInRleHQtWyNGQUY4RjVdXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBEQVRBIFZJU1VBTElaQVRJT05TICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTAgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQteHMgdGV4dC1bI0ZBRjhGNV0vNDBcIj5HZW9ncmFwaGljIFNpZ25hbCBTdHJlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2xvYmUgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtWyNGQUY4RjVdLzIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGgtWzMwMHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXsocmVwb3J0Py5hZmZlY3RlZF9jb3VudHJpZXMgfHwgW10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJjb2RlXCIgYXhpc0xpbmU9e2ZhbHNlfSB0aWNrTGluZT17ZmFsc2V9IHRpY2s9e3sgZmlsbDogJyNGQUY4RjU0NCcsIGZvbnRTaXplOiAxMCwgZm9udEZhbWlseTogJ21vbm9zcGFjZScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcj17eyBmaWxsOiAnI0ZBRjhGNTA4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxQTFBMUEnLCBib3JkZXJDb2xvcjogJyNGNTlFMEIzMycsIGJvcmRlclJhZGl1czogJzFyZW0nLCBjb2xvcjogJyNGQUY4RjUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cImNhc2VzXCIgcmFkaXVzPXtbNCwgNCwgMCwgMF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyZXBvcnQ/LmFmZmVjdGVkX2NvdW50cmllcyB8fCBbXSkubWFwKChlbnRyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2luZGV4fSBmaWxsPXtlbnRyeS5jb25maWRlbmNlID4gMC43NSA/ICcjRjU5RTBCJyA6ICcjRjU5RTBCNjYnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRkFGOEY1XS81IGJvcmRlciBib3JkZXItWyNGQUY4RjVdLzEwIHJvdW5kZWQtWzIuNXJlbV0gcC0xMCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC14cyB0ZXh0LVsjRkFGOEY1XS80MFwiPldITyBTeW5kcm9tZSBQcm9maWxlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eSBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1bI0ZBRjhGNV0vMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgaC1bMzAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGFyQ2hhcnQgY3g9XCI1MCVcIiBjeT1cIjUwJVwiIG91dGVyUmFkaXVzPVwiODAlXCIgZGF0YT17KHJlcG9ydD8uc3luZHJvbWVfZGF0YSB8fCBbXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9sYXJHcmlkIHN0cm9rZT1cIiNGQUY4RjUxMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb2xhckFuZ2xlQXhpcyBkYXRhS2V5PVwibmFtZVwiIHRpY2s9e3sgZmlsbDogJyNGQUY4RjU0NCcsIGZvbnRTaXplOiA4LCBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTaWduYWwgU3RyZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNGNTlFMEJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGNTlFMEJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezAuM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEhZUE9USEVTSVMgJiBTT1ZFUkVJR05UWSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiBzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHQgbWItOFwiPkh5cG90aGVzaXMgRXZpZGVuY2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJlcG9ydD8uZXZpZGVuY2Vfc291cmNlcyB8fCBbXSkubWFwKChzcmMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQgYmctWyMwRDBEMTJdIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0ZBRjhGNV0vNSBncm91cCBob3Zlcjpib3JkZXItWyNGNTlFMEJdLzMwIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1bI0ZBRjhGNV0vNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjRjU5RTBCXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyBzaXplPXsxNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LVsjRkFGOEY1XS82MFwiPntzcmMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NyYy51cmx9IGNsYXNzTmFtZT1cInRleHQtWyNGNTlFMEJdIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dVcFJpZ2h0IHNpemU9ezE0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTAgc3BhY2UteS04IG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHQgdGV4dC1zbVwiPkludGVsbGlnZW5jZSBTaGFyaW5nPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WmFwIHNpemU9ezE0fSBjbGFzc05hbWU9XCJ0ZXh0LVsjRjU5RTBCXVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vMzAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlNlc3Npb24gSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXNzaW9uSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVNlc3Npb25JZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMwRDBEMTJdIGJvcmRlciBib3JkZXItWyNGQUY4RjVdLzEwIHJvdW5kZWQteGwgcHgtNCBweS0yIHRleHQtWzEwcHhdIGZvbnQtbW9ubyB0ZXh0LVsjRjU5RTBCXSBmb2N1czpib3JkZXItWyNGNTlFMEJdLzUwIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtbW9ubyB0ZXh0LVsjRkFGOEY1XS8zMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+U2hhcmUgSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaGFyZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVTaGFyZUlkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzBEMEQxMl0gYm9yZGVyIGJvcmRlci1bI0ZBRjhGNV0vMTAgcm91bmRlZC14bCBweC00IHB5LTIgdGV4dC1bMTBweF0gZm9udC1tb25vIHRleHQtWyNGNTlFMEJdIGZvY3VzOmJvcmRlci1bI0Y1OUUwQl0vNTAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLVsjRkFGOEY1XS81IHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tb25vIHRleHQtWyNGQUY4RjVdLzMwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5TaGFyZSBVUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMEQwRDEyXSBwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCBicmVhay1hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NoYXJlVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBmb250LW1vbm8gdGV4dC1bI0Y1OUUwQl0vODAgaG92ZXI6dGV4dC1bI0Y1OUUwQl0gdHJhbnNpdGlvbi1jb2xvcnMgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NoYXJlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG92ZXJmbG93LWhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQgPyBcImgtYXV0b1wiIDogXCJoLVsyMDBweF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGllbGRDaGVjayBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHQgdGV4dC1zbVwiPkRhdGEgU292ZXJlaWdudHkgUHJvb2Y8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vNjBcIj5aRVJPIFJBVyBEQVRBIExFQUtFRDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bI0ZBRjhGNV0vMzAgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZGVyYXRlZCBsZWFybmluZyBhdWRpdCBsb2dzIGNvbmZpcm0gb25seSB2ZWN0b3IgZW1iZWRkaW5ncyBhbmQgc3RhdGlzdGljYWwgc3VtbWFyaWVzIHdlcmUgc2hhcmVkIHZpYSBBU0k6T25lIHJlbGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQoIWlzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGZvbnQtbW9ubyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LVsjRjU5RTBCXSBob3Zlcjp1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQgPyBcIkNvbGxhcHNlIEF1ZGl0IExvZ1wiIDogXCJWaWV3IEZ1bGwgQ2VydGlmaWNhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEYXRhU292ZXJlaWdudHlFeHBhbmRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItWyNGQUY4RjVdLzUgbXQtNCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bOHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vMjBcIj5JRDogU09WLTk5Mi1HSFMtQ0VSVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVs4cHhdIGZvbnQtbW9ubyB0ZXh0LWdyZWVuLTUwMC81MCB1bmRlcmxpbmVcIj5TSEEyNTY6IGUzYjBjNDQyOThmYzFjMTQ5YWZiZjRjODk5NmZiOTI0MjdhZTQxZTQ2NDliOTM0Y2E0OTU5OTFiNzg1MmI4NTU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvVklMU0VFU0hBTkRJTFlBL09uZURyaXZlL0Rlc2t0b3AvU3BsaW5lIFNraWxsL2xhbmRpbmcvc3JjL3BhZ2VzL1JlcG9ydC5qc3gifQ==