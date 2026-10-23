// Portfolio Projects & Tools Data for Dilupa Chathuranga
// STRICT DILU TOOLS ONLY

const portfolioData = {
  profile: {
    name: "Dilupa Chathuranga",
    title: "BIM Specialist & Workflow Automation Technologist",
    subtitle: "Revit Architecture & Structure | Custom pyRevit Tools | AutoCAD MCP Automation",
    tagline: "High-velocity BIM modeling and documentation engineered with custom workflow automation.",
    location: "Open to Global Relocation & Remote Roles (Worldwide)",
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
    { label: "D&W Schedules", value: ">25x Faster", sub: "Dynamic Tables, Dims & 25 Params" },
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
      description: "An end-to-end parametric Revit automation platform that completely replaces manual legend drafting and disconnected schedules with live model data, automated linear dimensioning, dynamic table alignment, and instant revision synchronization.",
      problem: "Traditional Revit D&W scheduling was a tedious, highly error-prone bottleneck: (1) Draughtsmen had to manually pull 10+ doors/windows from legends one by one. (2) Over 20 parameters and notes were typed as static plain text - leading to endless typos, zero model traceability, and no live links. (3) Linear dimensions had to be drawn by hand on every single view. (4) Whenever an architect or engineer changed a door or window type/size, the schedule tables stayed stuck on old, obsolete values - causing massive drawing discrepancies, costly site rework, and coordination confusion.",
      solution: "Engineered a custom, production-proven Revit Ribbon suite (Panel: 'Door & Window Schedules') powered by pyRevit and Revit API:  -  Batch Parameter Injection (25 Params): Simultaneously injects and maps 25 shared parameters across all door and window families with automated data feeds.  -  Live Dynamic Linking: Any change in family dimensions, host wall types, or room associations feeds directly into schedules.  -  Auto-Aligning Tables: Automatically calculates layout coordinates and neatly aligns schedule tables based on actual element counts.  -  One-Click Sync ('Update Tables'): Instantly refreshes all table data against live model geometry with zero manual typing.  -  Automated Dynamic Dimensions ('Dims'): Programmatically snaps and places linear dimensions on elevations, updating automatically with geometry changes.  -  Global Smart Re-Tagging ('ReTagAll'): One-click re-tagging ensures every door and window is tagged sequentially with zero duplicates.",
      impact: "Delivers a transformative leap in production velocity (>95% time reduction, slashing multi-day manual drafting to seconds). Completely eliminates manual text typos, manual dimensioning, and stale drawing schedule discrepancies.",
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
      id: "coordination-masterplan",
      category: "coordination",
      title: "Multi-Discipline Masterplan & Villa Replicator Suite",
      badge: "Masterplan Automation",
      subtitle: "Automated Villa Staging, Named Sites Generation & mm-Precision Multi-Discipline Replication",
      video: "assets/videos/replicate_master.mp4",
      videos: [
        { label: "Replicate Master (Discipline Replication)", src: "assets/videos/replicate_master.mp4" },
        { label: "Stage Links (Batch Link Discovery & Staging)", src: "assets/videos/stage_links.mp4" },
        { label: "Site Generator (Automated Named Sites)", src: "assets/videos/site_generator.mp4" }
      ],
      description: "A comprehensive pyRevit coordination suite engineered for large-scale multi-villa resort masterplans (100+ units), automating Named Sites generation, sequential link staging, and exact millimeter-precision replication across all engineering disciplines.",
      problem: "Coordinating 100+ villas across a large-scale coastal resort masterplan required weeks of manual model linking, workset creation, and coordinate alignment across Architectural (ARC), Structural (STR), Mechanical (MEP), Electrical (ELE), and Plumbing (PLU) master models. Manual placement invited coordinate drift and severe modeling mismatches.",
      solution: "Engineered a high-velocity 3-module coordination suite on the 'Coordination' ribbon panel:  -  Stage Links: Scans external project directories for unlinked FOH, BOH, and Villa models (0 initial links loaded), creates corresponding project Worksets, batch-links them anew into the active project, and stages them into a sequential staging line south of the island.  -  Site Generator: Automatically discovers villa clusters, preserves survey coordinates, and publishes all Named Sites across 100+ villas in one single click without coordinate drift.  -  Replicate Master: Reads placed building coordinates, rotations (deg), and workset assignments directly from the ARC Master Model, and automatically batch-links and replicates STR, MEP, ELE, and PLU models at exact millimeter positions into clean discipline masters.",
      impact: "Compressed weeks of tedious multi-discipline model linking into seconds. Completely eliminated coordinate drift, rotation errors, and workset misalignment across 100+ island villas.",
      ribbonTools: [
        "Stage Links (Batch Link Discovery & Staging Line)",
        "Site Generator (Automated Named Sites Publishing)",
        "Replicate Master (Multi-Discipline Millimeter Replication)",
        "Workset Synchronization & Naming Consistency",
        "Zero-Drift Shared Coordinate Management"
      ],
      tags: ["Revit API", "Masterplan Coordination", "Named Sites", "Multi-Discipline Links", "Villa Clusters", "pyRevit"],
      icon: "fas fa-network-wired"
    },
    {
      id: "keyplan-importer",
      category: "automation",
      title: "Revit Keyplan Importer & TitleBlock Parameter Linker",
      badge: "Production Tool",
      subtitle: "Direct Title Block (.rfa) Clean, Import & Automated Visibility Linking",
      video: "assets/videos/keyplan_importer.mp4",
      description: "Custom Revit pyRevit extension tool engineered to run inside Title Block Family files (.rfa), automatically purging obsolete CAD layers, importing standardized DWG keyplans at origin (0,0,0), and linking each CAD's visibility directly to a dedicated Yes/No Family Parameter.",
      problem: "Manually placing keyplans inside Title Block families or on dozens of individual sheets was repetitive, prone to inconsistent viewport positioning, layer conflicts, and tedious manual visibility parameter mapping.",
      solution: "Created an intelligent Revit importer that executes inside Title Block Family files (.rfa): cleans obsolete CAD imports, validates keyplan DWG files, imports them at (0,0,0), automatically creates Yes/No Family Parameters, associates CAD visibility, and sets all parameters to Off (0) across all family types so drafters simply turn on the relevant keyplan per sheet in the project.",
      impact: "Guaranteed 100% drawing alignment across all sheets while saving hours of manual placement and parameter linking per project submittal.",
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
      id: "cad-mcp",
      category: "automation",
      title: "AutoCAD MCP Workflow Automation",
      badge: "CAD + AI Bridge",
      subtitle: "Transforming Days of Painstaking Drawing Prep into Automated Operations",
      description: "Pioneered a Model Context Protocol (MCP) automation pipeline within AutoCAD to batch-process, clean, and standardize complex DWG keyplans and geometric boundaries before importing to Revit.",
      problem: "Preparing multi-level keyplans and detailed boundary line drawings manually in AutoCAD took days of tedious clicking, layer sorting, scaling, and bounding box cleanup.",
      solution: "Engineered an AutoCAD MCP server bridge with scripted geometry standardization, automated layer isolation, and coordinate boundary extraction in minutes.",
      impact: "Compressed days of manual CAD prep into structured, reliable data streams ready for automated Revit import.",
      tags: ["AutoCAD", "MCP Automation", "CAD Optimization", "Batch Scripting"],
      icon: "fas fa-drafting-compass"
    }
  ],

  projects: [
    {
      id: "parametric-families",
      category: "bim",
      title: "Advanced Parametric D&W Suite & Master Library",
      badge: "Parametric Engineering",
      subtitle: "Mathematical Folding/Sliding Systems, Spline Timber Doors, Curved Glazing, Panic Exit Systems & Facade Screens",
      image: "assets/images/param_library_3d_showroom.png?v=5.6",
      isAi: false,
      gallery: [
        {
          label: "Master 3D Showroom (Tiered Overview)",
          icon: "fas fa-cubes",
          src: "assets/images/param_library_3d_showroom.png?v=5.6",
          title: "Architectural Master Library - Tiered 3D Component Array",
          caption: "<strong>Architectural Master Library 3D Showroom:</strong> Tiered level-based Revit showroom organizing hundreds of parametric door, window, wall, and architectural component families in parallel spatial bays. Engineered for instantaneous visual auditing, quality assurance, and automated extraction into custom pyRevit deployment suites."
        },
        {
          label: "15-Panel Folding Door (Accordion Math)",
          icon: "fas fa-door-open",
          src: "assets/images/param_door_folding_15panel.png?v=5.6",
          title: "DOR_Folding_MultiPanel_In.CG_Fr.AL (W8000 x H3200 mm)",
          caption: "<strong>Trigonometric Accordion Kinematics (W8000 x H3200 mm):</strong> Mathematical formulation allowing arbitrary, independent panel counts per side (Left: 10 panels divided into 5+5 groups, Right: 5 panels divided into 2+3 groups). Dynamic <code>Panel Fold Angle (60.00 deg)</code>, automated individual panel widths (526.7 mm), and overall opening length (7900 mm) calculated in real time without geometric distortion."
        },
        {
          label: "4-Panel Window (Top/Side Hung & Louvers)",
          icon: "fas fa-window-maximize",
          src: "assets/images/param_win_tophung_multipanel.png?v=5.6",
          title: "WIN_TopHung/Swing_MultyPanel.Eq_In.AL_Fr.AL (W3000 x H1150 mm)",
          caption: "<strong>Multi-Mode Operation & Dynamic Louvers (W3000 x H1150 mm):</strong> Boolean operation toggles for Top-Hung vs Side-Hung, dynamic panel arrays (4 panels), and louver count drivers (12 louvers). Integrates curved shading canopy calculations (450 mm eave, 50 mm edge curve) and real-time open area calculation (2.166 m2) directly within the family."
        },
        {
          label: "2-Panel Barn Sliding (Ribbed Cladding)",
          icon: "fas fa-sliders-h",
          src: "assets/images/param_door_sliding_barn_2panel.png?v=5.6",
          title: "DOR_Sliding_Barn_2Panel (W2100 x H2600 mm)",
          caption: "<strong>Heavy-Duty Track Hardware & Architectural Materials (W2100 x H2600 mm):</strong> Parametric overhead barn door hardware with 4200 mm sliding track length, 5 mm panel offset, and vertical ribbed architectural cladding. Populates comprehensive enterprise schedule parameters (Acoustic rating, Fire rating, Closer, Hardware) directly to project schedules."
        },
        {
          label: "1-Panel Barn Sliding (Trolley Rollers)",
          icon: "fas fa-door-closed",
          src: "assets/images/param_door_sliding_barn_1panel.png?v=5.6",
          title: "DOR_Sliding_Barn_1Panel-Type2 (W1000 x H2400 mm)",
          caption: "<strong>Exposed Trolley Roller System (W1000 x H2400 mm):</strong> Overhead round tube track with dual-wheel trolley hangers, parametric rail offsets (Rail H Offset: 57.7 mm, Rail Offset: 32.7 mm), sliding length calculation (2000 mm), and integrated stainless pull handle and kickplate components."
        },
        {
          label: "Unequal 2-Leaf Door (Transom & Infill)",
          icon: "fas fa-columns",
          src: "assets/images/param_door_swing_unequal_transom.png?v=5.6",
          title: "DOR_Swing_2Panel+2Widths+TopFixedGlass (W2100 x H3200 mm)",
          caption: "<strong>Asymmetric Dual Leaf & Transom Infill (W2100 x H3200 mm):</strong> Independent leaf width formulas (Door 1: 800 mm, Door 2: 1200 mm), fixed top transom glass (700 mm height), and instant material infill toggling between Glass/Timber and Louver panels via single boolean switch."
        },
        {
          label: "Spline Timber Swing (Louver & Glass)",
          icon: "fas fa-tree",
          src: "assets/images/param_door_swing_spline_timber.png?v=5.6",
          title: "DOR_Swing_2Panel_SplineTimber_In.ST.Gls.LVR_Fr.ST (W1500 x H2150 mm)",
          caption: "<strong>Organic Spline Timber Frame & Dual Infill (W1500 x H2150 mm):</strong> Handcrafted architectural swing door engineered with an organic, continuous spline moulding profile rather than rigid straight extrusion cuts, delivering an authentic handcrafted timber finish. Features fully parametric louver arrays (<code>LVR NOS: 25</code>, <code>LVR OFF: 100 mm</code>), real-time infill switching between Glass/Timber and Louvers, dynamic hardware placement, and integrated enterprise schedule parameters."
        },
        {
          label: "Panic Exit Double Swing (Safety Glazing)",
          icon: "fas fa-shield-alt",
          src: "assets/images/param_door_double_swing_panic_hardware.png?v=5.6",
          title: "DOR_DoubleSidedSwing_2Panel_In.GS+ViewPanel_Fr.GS (W1800 x H2150 mm)",
          caption: "<strong>Commercial Fire Egress & Panic Hardware (W1800 x H2150 mm):</strong> Heavy-duty galvanized steel double-swing egress door engineered for commercial life-safety compliance. Features parametric panic push bars (<code>PANIC BAR ON</code>), reinforced bottom kick plates (<code>KICK PLATE HEIGHT: 450 mm</code>, <code>5 mm thickness</code>), wired safety glass vision panels (<code>GLASS PANEL HEIGHT: 600 mm</code>), real-time opening area calculation (<code>3.570 m2</code>), and enterprise fire-rating/hardware schedule parameters."
        },
        {
          label: "Curved Curtain Wall (Concentric Mullions)",
          icon: "fas fa-circle-notch",
          src: "assets/images/param_curtain_wall_curved_mullions.png?v=5.6",
          title: "CT.WAL_ExteriorGlazing - Curved (Concentric Arc Geometry)",
          caption: "<strong>Concentric Curved Curtain Wall & Mullion Profiles:</strong> Engineered cylindrical curtain wall system with custom curved horizontal rectangular mullions (50 x 150 mm) and curved 20 mm architectural glazing panels. Parameterized with <code>Keep Concentric</code> radial arc alignments, fixed-number adaptive grids (2 Vertical x 1 Horizontal subdivisions), and automatic perimeter boundary embeds."
        },
        {
          label: "Generic Models (Screens & Organic Poles)",
          icon: "fas fa-bars",
          src: "assets/images/param_generic_models_louvers_timber.png?v=5.6",
          title: "Generic Models: Louver Screens, Timber Battens & Organic Columns",
          caption: "<strong>Architectural Generic Models - Screens, Battens & Organic Columns:</strong> Suite of custom parametric facade and screening families for luxury resort architecture. Includes framed vertical louver panels with structural sub-framing, angled privacy fin screens, vertical timber slat partitions, and an organic tapered round timber pole / tree branch column modeled with realistic natural taper and 3D spline sweep curves."
        }
      ],
      description: "An elite master suite of high-complexity parametric Door, Window, and architectural component families engineered in Autodesk Revit prior to the AI era. Built on rigorous trigonometric and conditional mathematical formulas, nested family hierarchies, organic spline geometry, and enterprise shared parameters - enabling a single intelligent family to replace dozens of rigid static files.",
      highlights: [
        "Master 3D Library Showroom: Comprehensive tiered architectural repository organizing hundreds of parametric assemblies in spatial bays",
        "Multi-Panel Folding Doors: Custom mathematical formulas allowing independent panel count control per side, swing angles, and automatic frame clearances",
        "Commercial Life-Safety & Panic Hardware: Dual-swing egress assemblies with parametric crash bars, wired glass vision panels, kick plates, and real-time egress opening area calculation",
        "Organic Spline Timber Door Frames: Authentic handcrafted door assemblies crafted with continuous spline moulding profiles, dynamic louver arrays (25+ blades), and boolean material infills",
        "Curved Concentric Curtain Glazing: Custom curved mullions (50x150 mm) and curved glass panels with automated concentric radial arc constraints",
        "Architectural Screening & Organic Timber Poles: Parametric generic model suites including framed louver panels, angled privacy fins, batten screens, and realistic tapered tree trunk columns",
        "2-Panel Sliding Barn Systems: Precision-engineered track hardware, hanging brackets, and parametric clearance calculations",
        "Multi-Purpose Dynamic Windows: Configurable panel arrays with instant operation switching (Top-Hung, Side-Swing, Fixed) and infill swapping (Louvers, Glass, Solid)",
        "Enterprise Shared Parameter Framework: 100% parameter synchronization feeding directly into automated Door & Window schedules without manual data entry"
      ],
      toolsUsed: ["Autodesk Revit (Family Editor)", "Formula Math & Trigonometry", "Nested Families", "Shared Parameters", "Organic Spline Geometry", "Curved Curtain Systems", "Life-Safety & Egress Detailing", "LOD 350+ Detailing"],
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
