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
  const isHighConfidence = report.confidence_score > 0.8;
  const downloadReport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `GHS_Report_${report.id}.json`);
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
          report.id
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
              report.response_tier
            ] }, void 0, true, {
              fileName: "C:/Users/VILSEESHANDILYA/OneDrive/Desktop/Spline Skill/landing/src/pages/Report.jsx",
              lineNumber: 128,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "bg-[#FAF8F5]/10 border border-[#FAF8F5]/10 px-6 py-2 rounded-full text-[10px] font-mono text-[#FAF8F5]/60 uppercase tracking-widest", children: [
              "Confidence Level: ",
              (report.confidence_score * 100).toFixed(0),
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
        /* @__PURE__ */ jsxDEV(StatCard, { label: "Affected Nodes", value: report.affected_countries.length, sub: "Sovereign CountryAgents", colorClass: "text-[#FAF8F5]" }, void 0, false, {
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
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-[300px]", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { data: report.affected_countries, children: [
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
            /* @__PURE__ */ jsxDEV(Bar, { dataKey: "cases", radius: [4, 4, 0, 0], children: report.affected_countries.map(
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
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-[300px]", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(RadarChart, { cx: "50%", cy: "50%", outerRadius: "80%", data: report.syndrome_data, children: [
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
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: report.evidence_sources.map(
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

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBS0E7QUFBQSxrQkFDQ0EsNkJBQ0csdUJBQUMsU0FBSSxXQUFVLG1EQUNYO0FBQUEsMkNBQUMsU0FBSSxXQUFVLDBDQUF5QyxvQ0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBNEU7QUFBQSxvQkFDNUUsdUJBQUMsU0FBSSxXQUFVLG9EQUFtRCx3RkFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBMEk7QUFBQSx1QkFGOUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFHQTtBQUFBLHFCQWxCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW9CQTtBQUFBO0FBQUE7QUFBQSxZQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUErQkE7QUFBQSxhQXBFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcUVBO0FBQUEsV0EzRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTRGQTtBQUFBLFNBcExKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxTEE7QUFBQSxPQTVNSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNk1BO0FBRVI7QUFBQ1YsR0FuUHVCRCxRQUFNO0FBQUEsVUFDWHpDLFdBQ0VDLGFBQ29Gd0IsT0FBTztBQUFBO0FBQUEsTUFIeEZnQjtBQUFNLElBQUFQLElBQUFNLEtBQUFvRDtBQUFBLGFBQUExRCxJQUFBO0FBQUEsYUFBQU0sS0FBQTtBQUFBLGFBQUFvRCxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInVzZU5hdmlnYXRlIiwiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiQ2VsbCIsIlJhZGFyIiwiUmFkYXJDaGFydCIsIlBvbGFyR3JpZCIsIlBvbGFyQW5nbGVBeGlzIiwiUG9sYXJSYWRpdXNBeGlzIiwiR2xvYmUiLCJEb3dubG9hZCIsIkNoZXZyb25MZWZ0IiwiSW5mbyIsIkZpbGVUZXh0IiwiQWN0aXZpdHkiLCJaYXAiLCJTaGllbGRDaGVjayIsIkNoZWNrQ2lyY2xlMiIsIkFycm93VXBSaWdodCIsInVzZVNjYW4iLCJBbm9BSSIsImNuIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiR2xpdGNoQmFja2dyb3VuZCIsImFjdGl2ZSIsIl9jIiwiU3RhdENhcmQiLCJsYWJlbCIsInZhbHVlIiwic3ViIiwiY29sb3JDbGFzcyIsIl9jMiIsIlJlcG9ydCIsIl9zIiwiaWQiLCJuYXZpZ2F0ZSIsInJlcG9ydCIsImdlbmVyYXRlTW9ja1JlcG9ydCIsInNlc3Npb25JZCIsInVwZGF0ZVNlc3Npb25JZCIsInNoYXJlSWQiLCJ1cGRhdGVTaGFyZUlkIiwic2hhcmVVcmwiLCJpc0RhdGFTb3ZlcmVpZ250eUV4cGFuZGVkIiwic2V0SXNEYXRhU292ZXJlaWdudHlFeHBhbmRlZCIsImlzSGlnaENvbmZpZGVuY2UiLCJjb25maWRlbmNlX3Njb3JlIiwiZG93bmxvYWRSZXBvcnQiLCJkYXRhU3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRvd25sb2FkQW5jaG9yTm9kZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlIiwicmVzcG9uc2VfdGllciIsInRvRml4ZWQiLCJhZmZlY3RlZF9jb3VudHJpZXMiLCJsZW5ndGgiLCJmaWxsIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJjb25maWRlbmNlIiwic3luZHJvbWVfZGF0YSIsImV2aWRlbmNlX3NvdXJjZXMiLCJzcmMiLCJpIiwibmFtZSIsInVybCIsImUiLCJ0YXJnZXQiLCJfYzMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUmVwb3J0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge1xyXG4gICAgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBSZXNwb25zaXZlQ29udGFpbmVyLCBDZWxsLFxyXG4gICAgUmFkYXIsIFJhZGFyQ2hhcnQsIFBvbGFyR3JpZCwgUG9sYXJBbmdsZUF4aXMsIFBvbGFyUmFkaXVzQXhpc1xyXG59IGZyb20gJ3JlY2hhcnRzJztcclxuaW1wb3J0IHtcclxuICAgIEdsb2JlLCBEb3dubG9hZCwgQ2hldnJvbkxlZnQsXHJcbiAgICBJbmZvLCBGaWxlVGV4dCwgQWN0aXZpdHksIFphcCwgU2hpZWxkQ2hlY2ssIENoZWNrQ2lyY2xlMiwgQXJyb3dVcFJpZ2h0XHJcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgdXNlU2NhbiB9IGZyb20gJy4uL2NvbnRleHQvU2NhbkNvbnRleHQnO1xyXG5pbXBvcnQgQW5vQUkgZnJvbSAnLi4vY29tcG9uZW50cy9Bbm9BSSc7XHJcblxyXG5jb25zdCBjbiA9ICguLi5jbGFzc2VzKSA9PiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XHJcblxyXG4vLyAtLS0gTkFUSVZFIEVGRkVDVFMgLS0tXHJcblxyXG5jb25zdCBHbGl0Y2hCYWNrZ3JvdW5kID0gKHsgYWN0aXZlIH0pID0+IHtcclxuICAgIGlmICghYWN0aXZlKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHotMCBwb2ludGVyLWV2ZW50cy1ub25lIG92ZXJmbG93LWhpZGRlbiBvcGFjaXR5LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1yZWQtNTAwLzIwIG1peC1ibGVuZC1vdmVybGF5IGFuaW1hdGUtZ2xpdGNoLXByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICBAa2V5ZnJhbWVzIGdsaXRjaC1wcmltYXJ5IHtcclxuICAgICAgICAgIDAlIHsgY2xpcC1wYXRoOiBpbnNldCgxMCUgMCA4MCUgMCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cclxuICAgICAgICAgIDUlIHsgY2xpcC1wYXRoOiBpbnNldCg1MCUgMCAxMCUgMCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTsgfVxyXG4gICAgICAgICAgMTAlIHsgY2xpcC1wYXRoOiBpbnNldCgyMCUgMCA2MCUgMCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxyXG4gICAgICAgICAgMTUlIHsgY2xpcC1wYXRoOiBpbnNldCg4MCUgMCA1JSAwKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7IH1cclxuICAgICAgICAgIDIwJSB7IGNsaXAtcGF0aDogbm9uZTsgdHJhbnNmb3JtOiBub25lOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbmltYXRlLWdsaXRjaC1wcmltYXJ5IHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZ2xpdGNoLXByaW1hcnkgMC41cyBzdGVwcygyKSBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyAtLS0gQ09NUE9ORU5UUyAtLS1cclxuXHJcbmNvbnN0IFN0YXRDYXJkID0gKHsgbGFiZWwsIHZhbHVlLCBzdWIsIGNvbG9yQ2xhc3MgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLTJ4bCBwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vMzAgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gbWItNFwiPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFwidGV4dC00eGwgZm9udC1ibGFjayBmb250LW1vbm8gbWItMVwiLCBjb2xvckNsYXNzKX0+e3ZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtbW9ubyB0ZXh0LVsjRkFGOEY1XS8yMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+e3N1Yn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVwb3J0KCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB7IHJlcG9ydCwgZ2VuZXJhdGVNb2NrUmVwb3J0LCBzZXNzaW9uSWQsIHVwZGF0ZVNlc3Npb25JZCwgc2hhcmVJZCwgdXBkYXRlU2hhcmVJZCwgc2hhcmVVcmwgfSA9IHVzZVNjYW4oKTtcclxuICAgIGNvbnN0IFtpc0RhdGFTb3ZlcmVpZ250eUV4cGFuZGVkLCBzZXRJc0RhdGFTb3ZlcmVpZ250eUV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVwb3J0ICYmIGlkID09PSAnZGVtby0wMDEnKSB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlTW9ja1JlcG9ydCgnZGVtby0wMDEnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWQsIHJlcG9ydCwgZ2VuZXJhdGVNb2NrUmVwb3J0XSk7XHJcblxyXG4gICAgaWYgKCFyZXBvcnQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1bIzBEMEQxMl1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1bI0Y1OUUwQl0gYW5pbWF0ZS1zcGluXCIgc2l6ZT17MzJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gdGV4dC1bI0ZBRjhGNV0vNDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPkh5ZHJhdGluZyBSZXBvcnQgRGF0YS4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzSGlnaENvbmZpZGVuY2UgPSByZXBvcnQuY29uZmlkZW5jZV9zY29yZSA+IDAuODtcclxuXHJcbiAgICBjb25zdCBkb3dubG9hZFJlcG9ydCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhU3RyID0gXCJkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHJlcG9ydCwgbnVsbCwgMikpO1xyXG4gICAgICAgIGNvbnN0IGRvd25sb2FkQW5jaG9yTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkYXRhU3RyKTtcclxuICAgICAgICBkb3dubG9hZEFuY2hvck5vZGUuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgYEdIU19SZXBvcnRfJHtyZXBvcnQuaWR9Lmpzb25gKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkQW5jaG9yTm9kZSk7XHJcbiAgICAgICAgZG93bmxvYWRBbmNob3JOb2RlLmNsaWNrKCk7XHJcbiAgICAgICAgZG93bmxvYWRBbmNob3JOb2RlLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuIGJnLVsjMEQwRDEyXSBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8QW5vQUkgLz5cclxuICAgICAgICAgICAgPEdsaXRjaEJhY2tncm91bmQgYWN0aXZlPXtyZXBvcnQ/LmNvbmZpZGVuY2Vfc2NvcmUgPiAwLjh9IC8+XHJcblxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS02IHB4LTEwIGJvcmRlci1iIGJvcmRlci1bI0ZBRjhGNV0vNSBiZy1bIzBEMEQxMl0vODAgYmFja2Ryb3AtYmx1ci14bCBzdGlja3kgdG9wLTAgei1bMTAwXVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvZGFzaGJvYXJkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bI0ZBRjhGNV0vNDAgaG92ZXI6dGV4dC1bI0Y1OUUwQl0gdHJhbnNpdGlvbi1jb2xvcnMgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBzaXplPXsxNH0gLz4gQmFjayB0byBIdWJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWxlVGV4dCBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1bI0Y1OUUwQl1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dXCI+SHlwb3RoZXNpc0lEOiB7cmVwb3J0LmlkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Rvd25sb2FkUmVwb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjRjU5RTBCXS8xMCBob3ZlcjpiZy1bI0Y1OUUwQl0gaG92ZXI6dGV4dC1bIzBEMEQxMl0gYm9yZGVyIGJvcmRlci1bI0Y1OUUwQl0vMjAgdGV4dC1bI0Y1OUUwQl0gcHgtNCBweS0yIHJvdW5kZWQtZnVsbCB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkIHNpemU9ezE0fSAvPiBFeHBvcnQgSlNPTlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBwLTEwIG1heC13LXNjcmVlbi14bCBteC1hdXRvIHNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFNUQVRVUyBIRVJPICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicm91bmRlZC1bMi41cmVtXSBwLTEyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGlnaENvbmZpZGVuY2UgPyBcImJnLXJlZC01MDAvMTAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzMwXCIgOiBcImJnLWdyZWVuLTUwMC8xMCBib3JkZXIgYm9yZGVyLWdyZWVuLTUwMC8zMFwiXHJcbiAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTEwIHBvaW50ZXItZXZlbnRzLW5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWdoQ29uZmlkZW5jZSA/IFwiYmctW3JhZGlhbC1ncmFkaWVudChjaXJjbGVfYXRfY2VudGVyLHJlZF8wJSx0cmFuc3BhcmVudF83MCUpXVwiIDogXCJiZy1bcmFkaWFsLWdyYWRpZW50KGNpcmNsZV9hdF9jZW50ZXIsZ3JlZW5fMCUsdHJhbnNwYXJlbnRfNzAlKV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIG1iLTQgbGVhZGluZy1ub25lIGlubGluZS1ibG9jayBmb250LXNhbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0hpZ2hDb25maWRlbmNlID8gXCJPdXRicmVhayBIeXBvdGhlc2lzXCIgOiBcIk1vbml0b3JpbmcgUGhhc2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y24oXCJibG9jayBpdGFsaWMgZm9udC1zZXJpZiBub3JtYWwtY2FzZSBmb250LWxpZ2h0IHRleHQtNXhsIG10LTJcIiwgaXNIaWdoQ29uZmlkZW5jZSA/IFwidGV4dC1yZWQtNTAwXCIgOiBcInRleHQtZ3JlZW4tNTAwXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNIaWdoQ29uZmlkZW5jZSA/IFwiQ29uZmlybWVkIERldGVjdGlvblwiIDogXCJObyBDbHVzdGVyIERldGVjdGVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4LTYgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1bMTBweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4zZW1dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWdoQ29uZmlkZW5jZSA/IFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlXCIgOiBcImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3BvbnNlIFRpZXI6IHtyZXBvcnQucmVzcG9uc2VfdGllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLVsjRkFGOEY1XS8xMCBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCBweC02IHB5LTIgcm91bmRlZC1mdWxsIHRleHQtWzEwcHhdIGZvbnQtbW9ubyB0ZXh0LVsjRkFGOEY1XS82MCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlkZW5jZSBMZXZlbDogeyhyZXBvcnQuY29uZmlkZW5jZV9zY29yZSAqIDEwMCkudG9GaXhlZCgwKX0lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1FVFJJQ1MgR1JJRCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cIlByaW1hcnkgU3luZHJvbWVcIiB2YWx1ZT1cIklMSVwiIHN1Yj1cIkluZmx1ZW56YS1MaWtlIElsbG5lc3NcIiBjb2xvckNsYXNzPVwidGV4dC1bI0Y1OUUwQl1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cIkFmZmVjdGVkIE5vZGVzXCIgdmFsdWU9e3JlcG9ydC5hZmZlY3RlZF9jb3VudHJpZXMubGVuZ3RofSBzdWI9XCJTb3ZlcmVpZ24gQ291bnRyeUFnZW50c1wiIGNvbG9yQ2xhc3M9XCJ0ZXh0LVsjRkFGOEY1XVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRDYXJkIGxhYmVsPVwiVGltZSBXaW5kb3dcIiB2YWx1ZT1cIjcySFwiIHN1Yj1cIlJvbGxpbmcgUHJlY2lzaW9uIFNjYW5cIiBjb2xvckNsYXNzPVwidGV4dC1bI0ZBRjhGNV1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0Q2FyZCBsYWJlbD1cIlNpZ25hbCBTb3VyY2VcIiB2YWx1ZT1cIk9TSU5UXCIgc3ViPVwiRmVkZXJhdGVkIENvcnJlbGF0aW9uXCIgY29sb3JDbGFzcz1cInRleHQtWyNGQUY4RjVdXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBEQVRBIFZJU1VBTElaQVRJT05TICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTAgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQteHMgdGV4dC1bI0ZBRjhGNV0vNDBcIj5HZW9ncmFwaGljIFNpZ25hbCBTdHJlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2xvYmUgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtWyNGQUY4RjVdLzIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGgtWzMwMHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtyZXBvcnQuYWZmZWN0ZWRfY291bnRyaWVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJjb2RlXCIgYXhpc0xpbmU9e2ZhbHNlfSB0aWNrTGluZT17ZmFsc2V9IHRpY2s9e3sgZmlsbDogJyNGQUY4RjU0NCcsIGZvbnRTaXplOiAxMCwgZm9udEZhbWlseTogJ21vbm9zcGFjZScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcj17eyBmaWxsOiAnI0ZBRjhGNTA4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxQTFBMUEnLCBib3JkZXJDb2xvcjogJyNGNTlFMEIzMycsIGJvcmRlclJhZGl1czogJzFyZW0nLCBjb2xvcjogJyNGQUY4RjUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cImNhc2VzXCIgcmFkaXVzPXtbNCwgNCwgMCwgMF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlcG9ydC5hZmZlY3RlZF9jb3VudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2luZGV4fSBmaWxsPXtlbnRyeS5jb25maWRlbmNlID4gMC43NSA/ICcjRjU5RTBCJyA6ICcjRjU5RTBCNjYnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRkFGOEY1XS81IGJvcmRlciBib3JkZXItWyNGQUY4RjVdLzEwIHJvdW5kZWQtWzIuNXJlbV0gcC0xMCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC14cyB0ZXh0LVsjRkFGOEY1XS80MFwiPldITyBTeW5kcm9tZSBQcm9maWxlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eSBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1bI0ZBRjhGNV0vMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgaC1bMzAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGFyQ2hhcnQgY3g9XCI1MCVcIiBjeT1cIjUwJVwiIG91dGVyUmFkaXVzPVwiODAlXCIgZGF0YT17cmVwb3J0LnN5bmRyb21lX2RhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9sYXJHcmlkIHN0cm9rZT1cIiNGQUY4RjUxMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb2xhckFuZ2xlQXhpcyBkYXRhS2V5PVwibmFtZVwiIHRpY2s9e3sgZmlsbDogJyNGQUY4RjU0NCcsIGZvbnRTaXplOiA4LCBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTaWduYWwgU3RyZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNGNTlFMEJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGNTlFMEJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezAuM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEhZUE9USEVTSVMgJiBTT1ZFUkVJR05UWSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiBzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHQgbWItOFwiPkh5cG90aGVzaXMgRXZpZGVuY2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVwb3J0LmV2aWRlbmNlX3NvdXJjZXMubWFwKChzcmMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQgYmctWyMwRDBEMTJdIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0ZBRjhGNV0vNSBncm91cCBob3Zlcjpib3JkZXItWyNGNTlFMEJdLzMwIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1bI0ZBRjhGNV0vNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjRjU5RTBCXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyBzaXplPXsxNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LVsjRkFGOEY1XS82MFwiPntzcmMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NyYy51cmx9IGNsYXNzTmFtZT1cInRleHQtWyNGNTlFMEJdIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dVcFJpZ2h0IHNpemU9ezE0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTAgc3BhY2UteS04IG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHQgdGV4dC1zbVwiPkludGVsbGlnZW5jZSBTaGFyaW5nPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WmFwIHNpemU9ezE0fSBjbGFzc05hbWU9XCJ0ZXh0LVsjRjU5RTBCXVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vMzAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlNlc3Npb24gSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXNzaW9uSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVNlc3Npb25JZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMwRDBEMTJdIGJvcmRlciBib3JkZXItWyNGQUY4RjVdLzEwIHJvdW5kZWQteGwgcHgtNCBweS0yIHRleHQtWzEwcHhdIGZvbnQtbW9ubyB0ZXh0LVsjRjU5RTBCXSBmb2N1czpib3JkZXItWyNGNTlFMEJdLzUwIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtbW9ubyB0ZXh0LVsjRkFGOEY1XS8zMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+U2hhcmUgSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaGFyZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVTaGFyZUlkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzBEMEQxMl0gYm9yZGVyIGJvcmRlci1bI0ZBRjhGNV0vMTAgcm91bmRlZC14bCBweC00IHB5LTIgdGV4dC1bMTBweF0gZm9udC1tb25vIHRleHQtWyNGNTlFMEJdIGZvY3VzOmJvcmRlci1bI0Y1OUUwQl0vNTAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLVsjRkFGOEY1XS81IHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tb25vIHRleHQtWyNGQUY4RjVdLzMwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5TaGFyZSBVUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMEQwRDEyXSBwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCBicmVhay1hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NoYXJlVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBmb250LW1vbm8gdGV4dC1bI0Y1OUUwQl0vODAgaG92ZXI6dGV4dC1bI0Y1OUUwQl0gdHJhbnNpdGlvbi1jb2xvcnMgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NoYXJlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1bI0ZBRjhGNV0vNSBib3JkZXIgYm9yZGVyLVsjRkFGOEY1XS8xMCByb3VuZGVkLVsyLjVyZW1dIHAtMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG92ZXJmbG93LWhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQgPyBcImgtYXV0b1wiIDogXCJoLVsyMDBweF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGllbGRDaGVjayBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHQgdGV4dC1zbVwiPkRhdGEgU292ZXJlaWdudHkgUHJvb2Y8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vNjBcIj5aRVJPIFJBVyBEQVRBIExFQUtFRDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bI0ZBRjhGNV0vMzAgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZGVyYXRlZCBsZWFybmluZyBhdWRpdCBsb2dzIGNvbmZpcm0gb25seSB2ZWN0b3IgZW1iZWRkaW5ncyBhbmQgc3RhdGlzdGljYWwgc3VtbWFyaWVzIHdlcmUgc2hhcmVkIHZpYSBBU0k6T25lIHJlbGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQoIWlzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGZvbnQtbW9ubyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LVsjRjU5RTBCXSBob3Zlcjp1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRGF0YVNvdmVyZWlnbnR5RXhwYW5kZWQgPyBcIkNvbGxhcHNlIEF1ZGl0IExvZ1wiIDogXCJWaWV3IEZ1bGwgQ2VydGlmaWNhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEYXRhU292ZXJlaWdudHlFeHBhbmRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItWyNGQUY4RjVdLzUgbXQtNCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bOHB4XSBmb250LW1vbm8gdGV4dC1bI0ZBRjhGNV0vMjBcIj5JRDogU09WLTk5Mi1HSFMtQ0VSVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVs4cHhdIGZvbnQtbW9ubyB0ZXh0LWdyZWVuLTUwMC81MCB1bmRlcmxpbmVcIj5TSEEyNTY6IGUzYjBjNDQyOThmYzFjMTQ5YWZiZjRjODk5NmZiOTI0MjdhZTQxZTQ2NDliOTM0Y2E0OTU5OTFiNzg1MmI4NTU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvVklMU0VFU0hBTkRJTFlBL09uZURyaXZlL0Rlc2t0b3AvU3BsaW5lIFNraWxsL2xhbmRpbmcvc3JjL3BhZ2VzL1JlcG9ydC5qc3gifQ==