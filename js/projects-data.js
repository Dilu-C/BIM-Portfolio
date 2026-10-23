// Portfolio Projects & Tools Data for Dilupa Chathuranga
// STRICT DILU TOOLS ONLY

const portfolioData = {
  profile: {
    name: "Dilupa Chathuranga",
    title: "BIM Specialist & Workflow Automation Consultant",
    subtitle: "Revit Architecture & Structure | Custom pyRevit Tools | Revit & AutoCAD MCP Automation",
    tagline: "High-velocity BIM modeling, complex project delivery, and custom workflow automation for global firms.",
    location: "Available for Global Remote Consulting & High-Value BIM Contracts",
    primaryEmail: "dnrdesigners@gmail.com",
    secondaryEmail: "dilupa1990@gmail.com",
    linkedin: "https://www.linkedin.com/in/dilupa-chathuranga-223b5ba8/",
    education: {
      degree: "National Certificate in Engineering Draughtsmanship (NCED)",
      institution: "College of Technology, Rathnapura",
      honors: "Batch Top with Distinction (D)",
      summary: "Comprehensive technical foundation in structural detailing, geometric projection, construction standards, and municipal drawing compliance."
    }
  },

  metrics: [
    { label: "D&W Schedules", value: ">25x Faster", sub: "Dynamic Tables, Dims & 25+ Specification Parameters" },
    { label: "BIM Modeling", value: "LOD 300+", sub: "Architectural & Structural Models" },
    { label: "Drawing Setup", value: "70% Faster", sub: "Batch TitleBlock & Keyplan Importers" },
    { label: "Coordination", value: "0 Coordinate Drift", sub: "Multi-Discipline Masterplan Replicator" }
  ],

  tools: [
    {
      id: "dw-scheduling",
      category: "automation",
      title: "Door & Window Dynamic Scheduling Suite",
      badge: "Flagship Automation",
      subtitle: "Batch 25 Parameter Injection, Auto-Aligned Tables, Dynamic Dims & Instant Sync",
      video: "assets/videos/dw_schedule_data.mp4",
      image: "assets/images/revit_dw_ribbon_panel.png",
      description: "An end-to-end parametric Revit automation platform that completely replaces manual legend drafting and disconnected schedules with live model data, automated generic annotation mapping, dynamic 2-row and single-row sheet layouts, and instant revision synchronization.",
      problem: "Traditional Revit D&W scheduling was a tedious, highly error-prone bottleneck: (1) Draughtsmen had to manually pull 100+ doors/windows from legends one by one. (2) Over 20 parameters and notes were typed as static plain text with zero model traceability. (3) Linear dimensions had to be drawn by hand on every single view. (4) Whenever an opening size or type changed, the schedule tables stayed stuck on old, obsolete values - causing massive drawing discrepancies, costly site rework, and coordination confusion.",
      solution: "Engineered a custom, production-proven Revit Ribbon suite powered by pyRevit and Revit API: (1) Ecosystem-Wide Parameter Injection: Simultaneously injects and maps 25+ shared parameters across the active project and every single D&W family. (2) Generic Annotation Coordinate Grid: Generates custom schedule tables, places specialized generic annotation families in front of each schedule row, and programmatically maps matching shared parameters at exact coordinates. (3) Spatial Location Data Extraction: Automatically extracts opening coordinates (host walls, room numbers, levels) and baked family data, pushing values to target schedule parameters in one pass. (4) Intelligent Multi-Sheet Layout Engine: Organizes 100+ doors and windows into sequential 2-row layouts across 100+ sheets, with automatic fallback to single-row layouts on final sheets for oversized folding/sliding doors. (5) Live Dynamic Dimensions & ReTagAll: Programmatically snaps linear dimensions on elevations and performs global sequential tag synchronization.",
      impact: "Compressed weeks of manual schedule drafting into a 1-click automated operation, delivering 100% data fidelity across 100+ drawing sheets with zero typos.",
      ribbonTools: [
        "ReTagAll (Global Sequential Tag Sync)",
        "Add / Remove / Map (Shared Parameter Engine)",
        "Data (25 Param Batch Live Injection)",
        "Table (Auto-Align Dynamic Elevation Tables)",
        "Update Tables (Instant Live 3D Model Sync)",
        "Dims (Automated Dimensioning Engine)"
      ],
      tags: ["Revit API", "pyRevit", "Dynamic Scheduling", "Auto-Dimensioning", "Batch Parameters", "Live Model Sync"],
      icon: "fas fa-table"
    },
        {
      id: "export-manager",
      category: "automation",
      title: "Export Manager & Drawing Publishing Platform",
      badge: "Flagship Production Tool",
      subtitle: "Active Model Vector Sheet Previews, Click-to-Zoom & Smart Archiving",
      video: "assets/videos/export_manager.mp4",
      description: "An enterprise export publishing platform for active Revit models featuring interactive inline vector sheet previews with click-to-zoom inspection, PDF and DWG publishing with custom naming profiles, collision-free exact-name archiving to 00 PREVIOUS, and automated Word (.docx) & Excel (.xlsx) Transmittal packages.",
      problem: "Traditional Revit exporting suffers from severe workstation friction: (1) Drafters have to blindly export sheets without visually inspecting them, leading to misaligned views or outdated revision dates on published PDFs. (2) Accidental overwrites wipe out previous client deliverables. (3) Drafters spend hours manually preparing Word and Excel transmittal sheets after exporting, inviting human typing errors and submittal delays.",
      solution: "Engineered an enterprise-grade Revit automation tool on the 'Export' panel featuring:  -  Interactive Inline Vector Sheet Preview: Dynamic rendering pipeline delivering crystal-clear vector previews for 2D plans with smart raster fallback and click-to-zoom inspection before publishing.  -  Smart Exact-Name Selective Archiving: Scans destination directories and moves ONLY previous files whose exact filenames collide with current deliverables into collision-aware versions (00 PREVIOUS/<Date>/<01, 02>), leaving unrelated project files 100% untouched.  -  Automated Transmittals: Instantly compiles full document transmittals in both Word (.docx) and Excel (.xlsx) format matching corporate BIM standards.  -  Multi-Format Output: Publishes PDF (Separate Sheets or Unified Combined Set) and CAD (DWG) with custom Naming Profiles.",
      impact: "Slashes drawing submittal preparation by 85%, provides instant visual verification before exporting, and guarantees collision-free submittal archiving.",
      ribbonTools: [
        "Export Manager (Active Model Multi-Format Publisher)",
        "Inline Vector Sheet Previews & Click-to-Zoom",
        "Smart Exact-Name Archiving (00 PREVIOUS)",
        "Automated Word & Excel Document Transmittals",
        "Custom Sheet Naming Rules Engine"
      ],
      tags: ["Revit API", "pyRevit", "Export Manager", "Vector Preview", "Smart Archiving", "Document Transmittals", "WPF / XAML"],
      icon: "fas fa-file-export"
    },
    {
      id: "batch-export",
      category: "automation",
      title: "Headless Multi-Model Batch Exporter",
      badge: "High-Velocity Batch Engine",
      subtitle: "Background Multi-Model Publishing Without Graphical View Overhead",
      video: "assets/videos/batch_export.mp4",
      description: "High-velocity background batch publishing engine that concurrently processes multiple closed Revit project models (.rvt) headlessly in memory without GUI viewport overhead. Automatically exports CAD (DWG) and sheetwise or combined multi-page PDFs, compiles transmittal drawing registers, and prevents memory leaks.",
      problem: "Publishing large multi-building or multi-villa projects requires opening dozens of heavy 300MB-800MB Revit models one by one. Opening each model interactively consumes 15-30 minutes, freezes the drafter's machine for hours, and causes worksharing lockups when background documents are left open in memory.",
      solution: "Engineered a dedicated headless multi-model background batch processor:  -  Concurrently opens closed project models in memory without graphical viewport overhead.  -  Batch-publishes selected sheets across 10+ models into DWG and PDF formats in a single unattended queue run.  -  Generates automated Excel drawing list transmittals and status execution logs.  -  Zero-Hang Memory Shield: Enforces guaranteed document disposal (doc.Close(False)) after each model to ensure zero memory leaks and prevent Revit freezing upon exit.",
      impact: "Eliminates workstation downtime during major project submittals, allowing overnight or unattended background publishing across entire resort villa clusters.",
      ribbonTools: [
        "Headless Background Multi-Model Engine",
        "Closed Model In-Memory Processing",
        "Combined & Sheetwise PDF Publishing",
        "Batch Execution Status Logs & Transmittals",
        "Zero-Hang Memory Disposal Shield"
      ],
      tags: ["Revit API", "pyRevit", "Batch Export", "Headless Processing", "Memory Management", "Multi-Model Queue"],
      icon: "fas fa-layer-group"
    },
    {
      id: "batch-link-stager",
      category: "coordination",
      title: "Masterplan Batch Link & Staging Line Generator",
      badge: "Masterplan Automation",
      subtitle: "Batch Links External RVT Models, Auto-Creates MP-XX Worksets & Generates Staging Line",
      image: "assets/images/batch_link_stager_ui.png?v=6.0",
      video: "assets/videos/stage_links.mp4",
      description: "High-velocity masterplan coordination tool built for pyRevit that scans external project directories for unlinked FOH, BOH, and Villa models, automatically generates corresponding designated project Worksets (e.g. MP-XX-CODE), batch-links them into the active master model, and arranges them in a neat staging line south of the island in sequential building number order (1, 2, 3 ->) ready for manual site placement.",
      problem: "In large-scale island resort masterplans with 34+ distinct building models, manually browsing, linking, creating individual worksets, setting up levels, and placing models one by one took days of tedious clicking, prone to missing links and incorrect workset assignments.",
      solution: "Engineered a custom WPF dark-theme interface that scans external link directories, detects renamed models, provides level datum offsets (e.g. Water Villas = +1.80m Jetty Level, Land = 0.00m MSL Datum), automatically creates designated worksets, batch-links selected RVT files, and stages them along a calculated X/Y spacing line.",
      impact: "Compressed days of manual link setup into a single 30-second automated execution with 100% workset naming consistency.",
      ribbonTools: [
        "Batch Model Discovery",
        "Automated MP-XX Workset Creation",
        "Staging Line Layout Engine",
        "Water Villa Level Offsets",
        "Visual Source Synchronization"
      ],
      tags: ["Revit API", "pyRevit", "WPF / XAML", "Batch Linking", "Workset Automation", "Masterplan Coordination"],
      icon: "fas fa-cubes"
    },
    {
      id: "site-generator",
      category: "coordination",
      title: "Batch Named Sites Generator & External Publisher",
      badge: "Spatial Intelligence",
      subtitle: "Headless Multi-Location Named Sites Generation & Shared Coordinate Publishing",
      image: "assets/images/site_generator_ui.png?v=6.0",
      video: "assets/videos/site_generator.mp4",
      description: "Custom pyRevit coordination engine that solves the multi-instance repeated building challenge. Once building links are placed across the island masterplan (even if an identical villa type is placed in 100 distinct locations), this tool headlessly opens external RVT models in the background, calculates 100% accurate ProjectLocations transform matrices, generates all Named Sites, publishes shared coordinates, and saves the models automatically.",
      problem: "When an architectural or structural villa model is repeated across 50 to 100 island locations, manually creating Named Sites inside each external RVT model, recording local rotation angles, and acquiring/publishing coordinates by hand is an exhausting, days-long ordeal prone to human error and coordinate drift.",
      solution: "Engineered a headless background engine with a sleek dark-theme UI: discovers all placed link instances in the active master model, extracts instance transformation matrices, opens each external RVT model headlessly via Revit API, generates corresponding Named Sites, publishes 100% accurate ProjectLocations, and auto-saves without human intervention.",
      impact: "Eliminated coordinate drift across 100+ placed villa instances and reduced days of high-risk manual site publishing to a single click.",
      ribbonTools: [
        "Headless Background RVT Processing",
        "Batch Named Sites Generator",
        "ProjectLocations Matrix Calculator",
        "Shared Coordinate Publisher",
        "Live Console Diagnostic Feed"
      ],
      tags: ["Revit API", "pyRevit", "Named Sites", "Shared Coordinates", "Headless Processing", "WPF UI"],
      icon: "fas fa-map-marker-alt"
    },
    {
      id: "coordination-masterplan",
      category: "coordination",
      title: "Multi-Discipline Masterplan Replicator",
      badge: "Discipline Synchronization",
      subtitle: "Millimeter-Precision Placement of STR, MEP, ELE & PLU from Architectural Masters",
      image: "assets/images/coordination_ribbon_panel.png?v=6.0",
      video: "assets/videos/replicate_master.mp4",
      description: "High-precision masterplan synchronization engine that reads placed building coordinates, rotations (deg), and workset assignments directly from the Architectural Master Model, and automatically batch-links and replicates Structural (STR), Mechanical (MEP), Electrical (ELE), and Plumbing (PLU) models at exact millimeter positions into clean discipline masters.",
      problem: "Replicating 100+ villas across separate discipline master models manually required days of error-prone copy-pasting, rotation matching, and alignment checks - inevitably causing clashes between disciplines.",
      solution: "Built an automated replication engine that reads the primary ARC master, discovers all linked instances, and writes identical transformation matrices to STR and MEP master models with zero coordinate drift.",
      impact: "Guaranteed 100% millimetric alignment across all engineering discipline masters in seconds.",
      ribbonTools: [
        "ARC Master Instance Reader",
        "Cross-Discipline Millimeter Replication",
        "Workset Synchronization",
        "Zero-Drift Shared Coordinates"
      ],
      tags: ["Revit API", "pyRevit", "Masterplan Coordination", "Discipline Replication", "Zero Drift"],
      icon: "fas fa-network-wired"
    },
    {
      id: "keyplan-importer",
      category: "automation",
      title: "Revit Keyplan Importer & TitleBlock Parameter Linker",
      badge: "Production Tool",
      subtitle: "Direct Title Block (.rfa) Clean, Import & Automated Visibility Linking",
      video: "assets/videos/keyplan_importer.mp4",
      description: "Custom Revit pyRevit extension tool engineered to batch-import 57 standardized building keyplans directly into Title Block Family files (.rfa) at origin (0,0,0), automatically binding each to a dedicated Yes/No visibility parameter.",
      problem: "In massive masterplans comprising 57 independent buildings, manually placing, cleaning, and linking keyplans across dozens of sheets took weeks of repetitive CAD imports, layer purging, inconsistent coordinate positioning, and tedious visibility parameter mapping.",
      solution: "Engineered an intelligent batch pipeline that runs inside Title Block Family files (.rfa): purges obsolete CAD layers, validates and imports 57 standardized DWG building keyplans at (0,0,0), automatically creates Yes/No Family Parameters, binds CAD visibility, and sets all parameters to Off (0) across family types so drafters simply toggle the active building per sheet in the project.",
      impact: "Eliminated weeks of manual placement across 57 buildings while guaranteeing 100% drawing alignment and coordinate accuracy across all issued sheets.",
      ribbonTools: [
        "Batch CAD Keyplan Importer",
        "Automatic Yes/No Parameter Creation",
        "Visibility Association Engine",
        "Location Plan Exclusion Filter"
      ],
      tags: ["pyRevit", "Keyplan Automation", "Title Block Family", "Visibility Parameters", "Revit API"],
      icon: "fas fa-map"
    },
    {
      id: "sheet-setup",
      category: "automation",
      title: "Batch Sheet Setup & TitleBlock Manager",
      badge: "Batch Automation",
      subtitle: "Batch TitleBlock Replacement, Location Plan Setup & Safe Automated Backup",
      video: "assets/videos/batch_sheet_setup.mp4",
      description: "A productivity tool that streamlines the creation of standardized drawing sheet packages, titleblock replacement across hundreds of sheets, Location Plan setup, CAD auto-detection, and automated safe project backups.",
      problem: "Setting up hundreds of drawing sheets for large commercial submittals required repetitive manual creation, sheet numbering, and view drag-and-drops. Changing titleblock versions or client logos required editing sheets one by one.",
      solution: "Built a batch sheet setup manager that batch-replaces titleblocks across the entire project, auto-detects CAD boundaries, sets up Location Plan sheets, and generates safe backups prior to modifications.",
      impact: "Dramatically compressed project setup time by over 70% and eliminated discrepancies in drawing titleblocks and sheet registers.",
      ribbonTools: [
        "Batch TitleBlock Replacer",
        "Location Plan Sheet Generator",
        "CAD Auto-Detection Engine",
        "Safe Automated Backup Shield"
      ],
      tags: ["Sheet Automation", "Titleblock Control", "View Templates", "pyRevit"],
      icon: "fas fa-layer-group"
    },
    {
      id: "material-auditor",
      category: "automation",
      title: "Material Auditor & Standards Engine",
      badge: "BIM Compliance",
      subtitle: "Automated Family Material Auditing & Strict DIL_MAT Standardization",
      video: "assets/videos/material_auditor.mp4",
      description: "Quality assurance utility that scans and standardizes family materials against corporate DIL_MAT criteria across architectural and structural models.",
      problem: "Imported families and third-party vendor models frequently introduced non-standard material names, missing render assets, and unlinked textures - corrupting material schedules and rendering pipelines.",
      solution: "Engineered an automated Material Auditor that scans active and linked families, compares material definitions against DIL_MAT standardized criteria, flags unstandardized elements with status badges, and batch-standardizes material tags in one click.",
      impact: "Guaranteed 100% material compliance and zero schedule discrepancies across all project models.",
      ribbonTools: [
        "Family Material Auditor",
        "DIL_MAT Criteria Standardizer",
        "Batch Parameter Remapping"
      ],
      tags: ["pyRevit", "Material Audit", "DIL_MAT Criteria", "Quality Assurance"],
      icon: "fas fa-paint-roller"
    },
    {
      id: "update-mot-areas",
      category: "automation",
      title: "Hospitality & Municipal Spatial Compliance Engine",
      badge: "Regulatory Compliance",
      subtitle: "Automated Room Boundary, Gross/Net BUA & Regulatory Compliance Sync",
      video: "assets/videos/update_mot_areas.mp4",
      description: "Automated spatial compliance engine built for luxury resort and hospitality masterplans to calculate, verify, and synchronize room boundaries against municipal building codes and tourism authority (MOT) area standards.",
      problem: "Large-scale hospitality and resort developments require strict adherence to municipal authority room area classifications and gross built-up ratios. Manual verification and area parameter synchronization across hundreds of rooms and villas was labor-intensive and error-prone.",
      solution: "Developed an automated spatial sync engine that reads room geometry from 'TOTAL BUA PER UNIT' Area Plan views, categorizes 'Building Common Area' as Covered and 'Exterior Area' as Open, and writes compliant regulatory area parameters directly into schedule headers. Built with a flexible architecture easily adaptable to any regional or municipal zoning framework.",
      impact: "Guarantees 100% audit-ready regulatory and tourism authority submission schedules with zero human calculation error.",
      ribbonTools: [
        "Update MOT Areas (One-Click Spatial Sync)",
        "TOTAL BUA PER UNIT View Extractor",
        "Resort Compliance Schedules",
        "Configurable Municipal Rule Engine"
      ],
      tags: ["pyRevit", "Spatial Compliance", "Municipal Regulations", "Area Calculations", "Configurable Engine"],
      icon: "fas fa-chart-pie"
    },
    {
      id: "family-library",
      category: "automation",
      title: "BIM Family Cloud & Visual Asset Browser",
      badge: "Firm-Wide Asset Engine",
      subtitle: "Multi-Discipline Family Catalog with Studio-White 3D Previews",
      image: "assets/images/family_library_ui.png?v=5.1",
      description: "A high-performance visual component browser for Revit that provides instant access to hundreds of verified, standardized architectural, structural, and MEP families with studio-white 3D previews.",
      problem: "Drafters frequently loaded outdated or corrupt families from scattered local hard drives, creating model inconsistencies and ballooning project file sizes.",
      solution: "Engineered an in-Revit visual catalog interface with discipline filter tabs (ARC, STR, PLU, ELE, FIRE, ACMV), real-time search, studio-white canvas previews, and 1-click loading into active models.",
      impact: "Cut family discovery and loading time by 90% while guaranteeing firm-wide component standardization.",
      ribbonTools: [
        "Multi-Discipline Asset Browser (ARC, STR, PLU, ELE, FIRE, ACMV)",
        "Studio-White 3D Thumbnail Canvas",
        "1-Click Direct Project Loading",
        "Central Repository Synchronization",
        "Clean Category Navigation (Doors, Windows, Cover Pages, Title Blocks)"
      ],
      tags: ["Revit API", "WPF / XAML", "Family Browser", "Component Standardization"],
      icon: "fas fa-boxes"
    },
    {
      id: "bim-cad-mcp",
      category: "automation",
      title: "Revit & AutoCAD MCP AI Automation Bridges",
      badge: "AI + BIM/CAD Protocol",
      subtitle: "Dual-Engine Model Context Protocol for Live Revit API Execution & AutoCAD DWG Automation",
      description: "Pioneered production-grade Model Context Protocol (MCP) bridges connecting AI coding agents directly to live Autodesk Revit and AutoCAD runtime environments. Enables hands-free Revit Python API script execution in active documents and autonomous AutoCAD DWG geometric sanitization.",
      problem: "Traditional BIM and CAD operations require endless manual repetition across disparate environments: manually testing and running Python scripts inside Revit, auditing element parameters, and spending days in AutoCAD cleaning, exploding, flattening, and standardizing multi-building DWG files before import.",
      solution: "Engineered dual native MCP server bridges: (1) Revit MCP Server: Live socket/listener bridge executing Python scripts directly within active or background Revit sessions via pyRevit and Revit API, enabling real-time element querying, parameter injection, geometry verification, and model health audits. (2) AutoCAD MCP Server: Direct COM automation bridge executing batch layer sanitization, 3D-to-2D polyline flattening, block audits, and coordinate boundary extraction in minutes.",
      impact: "Unlocks autonomous AI-driven BIM engineering: audits Revit project health directly through natural language agent workflows and transforms days of manual CAD drawing preparation into structured, reliable data streams ready for automated Revit import.",
      tags: ["Revit API", "AutoCAD COM", "Model Context Protocol", "AI Automation", "Python MCP"],
      icon: "fas fa-robot"
    }
  ],

  projects: [
    {
      id: "parametric-families",
      category: "bim",
      title: "Architectural Master Library & Advanced Parametric Component Suite",
      badge: "Parametric Engineering",
      subtitle: "Mathematical Door & Window Kinematics, Dynamic Spline Poles, Facade Screens & Curved Curtain Glazing",
      image: "assets/images/param_library_3d_showroom.png?v=6.1",
      isAi: false,
      gallery: [
        {
          label: "Master 3D Showroom (Tiered Overview)",
          icon: "fas fa-cubes",
          src: "assets/images/param_library_3d_showroom.png?v=6.1",
          title: "Architectural Master Library - Tiered 3D Component Array",
          caption: "<strong>Architectural Master Library 3D Showroom:</strong> Tiered level-based Revit showroom organizing hundreds of parametric door, window, wall, and architectural component families in parallel spatial bays. Engineered for instantaneous visual auditing, quality assurance, and automated extraction into custom pyRevit deployment suites."
        },
        {
          label: "15-Panel Folding Door (Accordion Math)",
          icon: "fas fa-door-open",
          src: "assets/images/param_door_folding_15panel.png?v=6.1",
          title: "DOR_Folding_MultiPanel_In.CG_Fr.AL (W8000 x H3200 mm)",
          caption: "<strong>Trigonometric Accordion Kinematics (W8000 x H3200 mm):</strong> Mathematical formulation allowing arbitrary, independent panel counts per side (Left: 10 panels divided into 5+5 groups, Right: 5 panels divided into 2+3 groups). Dynamic <code>Panel Fold Angle (60.00 deg)</code>, automated individual panel widths (526.7 mm), and overall opening length (7900 mm) calculated in real time without geometric distortion."
        },
        {
          label: "Spline Timber Swing (Louver & Glass)",
          icon: "fas fa-tree",
          src: "assets/images/param_door_swing_spline_timber.png?v=6.1",
          title: "DOR_Swing_2Panel_SplineTimber_In.ST.Gls.LVR_Fr.ST (W1500 x H2150 mm)",
          caption: "<strong>Organic Spline Timber Frame & Dual Infill (W1500 x H2150 mm):</strong> Handcrafted architectural swing door engineered with an organic, continuous spline moulding profile rather than rigid straight extrusion cuts, delivering an authentic handcrafted timber finish. Features fully parametric louver arrays (<code>LVR NOS: 25</code>, <code>LVR OFF: 100 mm</code>), real-time infill switching between Glass/Timber and Louvers, dynamic hardware placement, and integrated enterprise schedule parameters."
        },
        {
          label: "Generic Models (Screens & Spline Poles)",
          icon: "fas fa-bars",
          src: "assets/images/param_generic_models_louvers_timber.png?v=6.1",
          title: "Generic Models: Parametric Spline Poles & Timber Screening Types",
          caption: "<strong>Parametric Generic Models - Spline Poles & Timber Screen Catalog:</strong> Custom architectural generic model families engineered for luxury resort architecture. Features natural organic timber poles modeled along 3D splines with <strong>parametric diameter variation along the sweep</strong> and <strong>dynamically adjustable inclination/tilt angles</strong>. Accompanied by a full parametric type catalog of timber screens: heavy framed vertical louver panels, angled 45-degree privacy fins, and continuous vertical batten partitions."
        },
        {
          label: "Curved Curtain Wall (Concentric Mullions)",
          icon: "fas fa-circle-notch",
          src: "assets/images/param_curtain_wall_curved_mullions.png?v=6.1",
          title: "CT.WAL_ExteriorGlazing - Curved (Concentric Arc Geometry)",
          caption: "<strong>Concentric Curved Curtain Wall & Mullion Profiles:</strong> Engineered cylindrical curtain wall system with custom curved horizontal rectangular mullions (50 x 150 mm) and curved 20 mm architectural glazing panels. Parameterized with <code>Keep Concentric</code> radial arc alignments, fixed-number adaptive grids (2 Vertical x 1 Horizontal subdivisions), and automatic perimeter boundary embeds."
        },
        {
          label: "Panic Exit Double Swing (Safety Glazing)",
          icon: "fas fa-shield-alt",
          src: "assets/images/param_door_double_swing_panic_hardware.png?v=6.1",
          title: "DOR_DoubleSidedSwing_2Panel_In.GS+ViewPanel_Fr.GS (W1800 x H2150 mm)",
          caption: "<strong>Commercial Fire Egress & Panic Hardware (W1800 x H2150 mm):</strong> Heavy-duty galvanized steel double-swing egress door engineered for commercial life-safety compliance. Features parametric panic push bars (<code>PANIC BAR ON</code>), reinforced bottom kick plates (<code>KICK PLATE HEIGHT: 450 mm</code>, <code>5 mm thickness</code>), wired safety glass vision panels (<code>GLASS PANEL HEIGHT: 600 mm</code>), real-time opening area calculation (<code>3.570 m2</code>), and enterprise fire-rating/hardware schedule parameters."
        },
        {
          label: "4-Panel Window (Top/Side Hung & Louvers)",
          icon: "fas fa-window-maximize",
          src: "assets/images/param_win_tophung_multipanel.png?v=6.1",
          title: "WIN_TopHung/Swing_MultyPanel.Eq_In.AL_Fr.AL (W3000 x H1150 mm)",
          caption: "<strong>Multi-Mode Operation & Dynamic Louvers (W3000 x H1150 mm):</strong> Boolean operation toggles for Top-Hung vs Side-Hung, dynamic panel arrays (4 panels), and louver count drivers (12 louvers). Integrates curved shading canopy calculations (450 mm eave, 50 mm edge curve) and real-time open area calculation (2.166 m2) directly within the family."
        },
        {
          label: "2-Panel Barn Sliding (Ribbed Cladding)",
          icon: "fas fa-sliders-h",
          src: "assets/images/param_door_sliding_barn_2panel.png?v=6.1",
          title: "DOR_Sliding_Barn_2Panel (W2100 x H2600 mm)",
          caption: "<strong>Heavy-Duty Track Hardware & Architectural Materials (W2100 x H2600 mm):</strong> Parametric overhead barn door hardware with 4200 mm sliding track length, 5 mm panel offset, and vertical ribbed architectural cladding. Populates comprehensive enterprise schedule parameters (Acoustic rating, Fire rating, Closer, Hardware) directly to project schedules."
        },
        {
          label: "1-Panel Barn Sliding (Trolley Rollers)",
          icon: "fas fa-door-closed",
          src: "assets/images/param_door_sliding_barn_1panel.png?v=6.1",
          title: "DOR_Sliding_Barn_1Panel-Type2 (W1000 x H2400 mm)",
          caption: "<strong>Exposed Trolley Roller System (W1000 x H2400 mm):</strong> Overhead round tube track with dual-wheel trolley hangers, parametric rail offsets (Rail H Offset: 57.7 mm, Rail Offset: 32.7 mm), sliding length calculation (2000 mm), and integrated stainless pull handle and kickplate components."
        },
        {
          label: "Unequal 2-Leaf Door (Transom & Infill)",
          icon: "fas fa-columns",
          src: "assets/images/param_door_swing_unequal_transom.png?v=6.1",
          title: "DOR_Swing_2Panel+2Widths+TopFixedGlass (W2100 x H3200 mm)",
          caption: "<strong>Asymmetric Dual Leaf & Transom Infill (W2100 x H3200 mm):</strong> Independent leaf width formulas (Door 1: 800 mm, Door 2: 1200 mm), fixed top transom glass (700 mm height), and instant material infill toggling between Glass/Timber and Louver panels via single boolean switch."
        }
      ],
      description: "An elite architectural repository and parametric family suite engineered in Autodesk Revit prior to the AI era. Spans high-complexity kinematic Door and Window assemblies, curved concentric facade glazing systems, and handcrafted generic models for luxury resort architecture - all powered by rigorous trigonometric formulas, 3D spline sweeps, and enterprise shared parameters.",
      highlights: [
        "Master 3D Library Showroom: Comprehensive tiered architectural repository organizing hundreds of parametric assemblies in spatial bays",
        "Parametric Spline Poles & Tree Columns: Organic timber poles modeled along 3D splines with variable diameter along the sweep and adjustable inclination angles",
        "Timber Screening Family Types: Parametric type catalog featuring framed vertical louvers, angled 45-deg privacy fins, and vertical batten partitions",
        "Curved Concentric Curtain Glazing: Custom curved rectangular mullions (50x150 mm) and curved glass with radial arc constraints",
        "Multi-Panel Folding Accordion Kinematics: Custom mathematical formulas allowing independent panel counts per side, fold angles, and automatic frame clearances",
        "Organic Spline Timber Door Frames: Handcrafted door assemblies crafted with continuous spline moulding profiles and dynamic louver arrays (25+ blades)",
        "Commercial Life-Safety Panic Hardware: Dual-swing egress assemblies with crash bars, wired glass vision panels, kick plates, and real-time egress open area math",
        "Heavy-Duty Barn Sliding Systems: Precision-engineered overhead track hardware, hanging brackets, and exposed trolley roller systems",
        "Multi-Purpose Dynamic Windows: Configurable panel arrays with instant operation switching (Top-Hung, Side-Swing, Fixed) and curved shading canopies",
        "Enterprise Shared Parameter Framework: 100% parameter synchronization feeding directly into automated Door & Window schedules without manual data entry"
      ],
      toolsUsed: ["Autodesk Revit (Family Editor)", "Formula Math & Trigonometry", "3D Spline Sweeps & Variable Diameters", "Curved Curtain Systems", "Screen Type Catalogs", "Shared Parameters", "LOD 350+ Detailing"],
      icon: "fas fa-drafting-compass"
    },
    {
      id: "commercial-office",
      category: "bim",
      title: "Commercial Office Building (Arc & Str)",
      badge: "Commercial Multi-Story",
      subtitle: "Revit Architectural & Structural Modeling | 2D Drawings & AI Walkthrough",
      video: "assets/videos/commercial_office_building.mp4",
      revitSheet: "assets/images/commercial_office_revit_3d_sheet.png",
      aiNote: "AI-generated conceptual walkthrough synthesized directly from my 2D Revit elevation and section drawing submittals.",
      description: "Comprehensive multi-story commercial office facility modeled and detailed in Autodesk Revit. Produced complete working drawing packages - detailed floor plans, building sections, and elevations - with full architectural and structural coordination.",
      highlights: [
        "Modeled & detailed in Autodesk Revit: core circulation, envelope, and structural frame elements",
        "Full production of working drawings: GA plans, technical sections, and 4-sided elevation sheets",
        "AI-Generated Walkthrough: Video synthesized from technical 2D CAD/Revit elevation drawings",
        "Adherence to strict municipal submission standards and client documentation guidelines"
      ],
      toolsUsed: ["Autodesk Revit (BIM)", "Working Drawings", "Revit Elevations & Sections", "AI Visualization"],
      icon: "fas fa-building"
    },
    {
      id: "beach-villa",
      category: "bim",
      title: "Luxury Single-Bedroom Beach Villa with Skydeck",
      badge: "Hospitality & Resort",
      subtitle: "Revit Organic Architecture | Technical Drawings & AI Visualization",
      image: "assets/images/luxury_beach_villa_render.jpg",
      revitSheet: "assets/images/beach_villa_revit_3d_sheet.png",
      aiNote: "AI-generated realistic render synthesized from technical Revit elevation linework and organic timber wall cladding specifications.",
      description: "A luxury coastal resort villa featuring intricate organic architecture modeled in Autodesk Revit: sweeping undulating thatched roof, sunken plunge pool, and drywall clad in irregular vertical timber poles. All floor plans, elevations, sections, and schedules authored in Revit.",
      highlights: [
        "Modeled in Autodesk Revit (LOD 350): complex wave-curved thatched roof, pergola, and sunken pool",
        "Detailed drawing packages: architectural floor plans, sections, and 4-sided elevation sheets",
        "Authentic Timber Cladding: Specified irregular, organic eucalyptus stick screens on drywall",
        "AI-Generated Render: Photorealistic visualization synthesized from technical elevation drawings"
      ],
      toolsUsed: ["Autodesk Revit (BIM)", "Complex Roof Modeling", "Working Drawings", "AI Visualization"],
      icon: "fas fa-umbrella-beach"
    },
    {
      id: "water-villa",
      category: "bim",
      title: "Overwater Lagoon Villas & Jetty Infrastructure",
      badge: "Overwater Resort",
      subtitle: "Marine Foundation Coordination & Marine Timber Superstructures",
      description: "Engineering and BIM production modeling of high-end overwater lagoon guest villas perched on marine concrete pilings, interconnected by primary service jetties.",
      highlights: [
        "Structural piling layout coordination, marine pile-cap integration, and framing models",
        "Architectural cladding, thatched roof framing modeling, and open-air pavilion designs",
        "Automated door & window scheduling using custom Revit ribbons for fast package delivery",
        "Site coordinate positioning matching marine survey GPS data without coordinate drift"
      ],
      toolsUsed: ["Autodesk Revit", "Marine Coordination", "Custom pyRevit Tools", "Shared Coordinates"],
      icon: "fas fa-water"
    },
    {
      id: "staff-accommodation",
      category: "bim",
      title: "Multi-Unit Island Staff Accommodation Complex",
      badge: "High-Density Residential",
      subtitle: "Repetitive Unit Optimization & Fast-Track Documentation",
      description: "High-efficiency multi-story residential building providing staff accommodation, communal dining facilities, and technical administration spaces for an island resort.",
      highlights: [
        "Standardized unit type groups and linked files for accelerated multi-story documentation",
        "Complete structural framing detailing: columns, beams, cast-in-place slabs, and stair cores",
        "Automated sheet setup and drawing register creation cutting days off project startup",
        "Full clash detection against plumbing and drainage layouts before site construction"
      ],
      toolsUsed: ["Autodesk Revit", "Model Groups", "Clash Detection", "Batch Sheet Setup"],
      icon: "fas fa-users"
    }
  ],

  skills: {
    bim: [
      { name: "Autodesk Revit (Architecture & Structure)", level: 98 },
      { name: "BIM Coordination & Clash Detection (Navisworks)", level: 92 },
      { name: "Parametric Family Creation & Advanced Formulas (D&W Suite)", level: 98 },
      { name: "Construction Documentation & Detail Drafting", level: 96 }
    ],
    draughting: [
      { name: "AutoCAD Advanced Drafting & Detail Standards", level: 96 },
      { name: "Structural Detailing & Reinforcement Concepts", level: 94 },
      { name: "Architectural Projection & Municipal Standards", level: 95 },
      { name: "NCED Academic Honors & Drafting Theory", level: 98 }
    ],
    automation: [
      { name: "pyRevit Tool Development & IronPython", level: 95 },
      { name: "WPF / XAML Custom UI Architecture", level: 92 },
      { name: "Revit API Custom Extensions & Batch Exporters", level: 90 },
      { name: "AutoCAD MCP & Workflow Automation Scripting", level: 88 }
    ]
  }
};
