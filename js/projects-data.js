// Portfolio Projects & Tools Data for Dilupa Chathuranga
// STRICT DILU TOOLS ONLY

const portfolioData = {
  profile: {
    name: "Dilupa Chathuranga",
    title: "BIM Specialist & Workflow Automation Technologist",
    subtitle: "Revit Architecture & Structure | Custom pyRevit Tools | AutoCAD MCP Automation",
    tagline: "High-velocity BIM modeling and documentation engineered with custom workflow automation.",
    location: "Sri Lanka (Open to Global & Remote Roles)",
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
      problem: "Traditional Revit D&W scheduling was a tedious, highly error-prone bottleneck: (1) Draughtsmen had to manually pull 10+ doors/windows from legends one by one. (2) Over 20 parameters and notes were typed as static plain text—leading to endless typos, zero model traceability, and no live links. (3) Linear dimensions had to be drawn by hand on every single view. (4) Whenever an architect or engineer changed a door or window type/size, the schedule tables stayed stuck on old, obsolete values—causing massive drawing discrepancies, costly site rework, and coordination confusion.",
      solution: "Engineered a custom, production-proven Revit Ribbon suite (Panel: 'Door & Window Schedules') powered by pyRevit and Revit API: • Batch Parameter Injection (25 Params): Simultaneously injects and maps 25 shared parameters across all door and window families with automated data feeds. • Live Dynamic Linking: Any change in family dimensions, host wall types, or room associations feeds directly into schedules. • Auto-Aligning Tables: Automatically calculates layout coordinates and neatly aligns schedule tables based on actual element counts. • One-Click Sync ('Update Tables'): Instantly refreshes all table data against live model geometry with zero manual typing. • Automated Dynamic Dimensions ('Dims'): Programmatically snaps and places linear dimensions on elevations, updating automatically with geometry changes. • Global Smart Re-Tagging ('ReTagAll'): One-click re-tagging ensures every door and window is tagged sequentially with zero duplicates.",
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
      solution: "Engineered an enterprise-grade Revit automation tool on the 'Export' panel featuring: • Interactive Inline Vector Sheet Preview: Dynamic rendering pipeline delivering crystal-clear vector previews for 2D plans with smart raster fallback and click-to-zoom inspection before publishing. • Smart Exact-Name Selective Archiving: Scans destination directories and moves ONLY previous files whose exact filenames collide with current deliverables into collision-aware versions (00 PREVIOUS/<Date>/<01, 02>), leaving unrelated project files 100% untouched. • Automated Transmittals: Instantly compiles full document transmittals in both Word (.docx) and Excel (.xlsx) format matching corporate BIM standards. • Multi-Format Output: Publishes PDF (Separate Sheets or Unified Combined Set) and CAD (DWG) with custom Naming Profiles.",
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
      problem: "Publishing large multi-building or multi-villa projects requires opening dozens of heavy 300MB–800MB Revit models one by one. Opening each model interactively consumes 15–30 minutes, freezes the drafter's machine for hours, and causes worksharing lockups when background documents are left open in memory.",
      solution: "Engineered a dedicated headless multi-model background batch processor: • Concurrently opens closed project models in memory without graphical viewport overhead. • Batch-publishes selected sheets across 10+ models into DWG and PDF formats in a single unattended queue run. • Generates automated Excel drawing list transmittals and status execution logs. • Zero-Hang Memory Shield: Enforces guaranteed document disposal (doc.Close(False)) after each model to ensure zero memory leaks and prevent Revit freezing upon exit.",
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
      description: "A comprehensive pyRevit coordination suite developed for multi-villa island masterplans (100+ units) in the Maldives, automating Named Sites generation, sequential link staging, and exact millimeter-precision replication across all engineering disciplines.",
      problem: "Coordinating 100+ water villas across an island in Maldives required weeks of manual model linking, workset creation, and coordinate alignment across Architectural (ARC), Structural (STR), Mechanical (MEP), Electrical (ELE), and Plumbing (PLU) master models. Manual placement invited coordinate drift and severe modeling mismatches.",
      solution: "Engineered a high-velocity 3-module coordination suite on the 'Coordination' ribbon panel: • Stage Links: Scans external project directories for unlinked FOH, BOH, and Villa models (0 initial links loaded), creates corresponding project Worksets, batch-links them anew into the active project, and stages them into a sequential staging line south of the island. • Site Generator: Automatically discovers villa clusters, preserves survey coordinates, and publishes all Named Sites across 100+ villas in one single click without coordinate drift. • Replicate Master: Reads placed building coordinates, rotations (θ), and workset assignments directly from the ARC Master Model, and automatically batch-links and replicates STR, MEP, ELE, and PLU models at exact millimeter positions into clean discipline masters.",
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
      problem: "Imported families and third-party vendor models frequently introduced non-standard material names, missing render assets, and unlinked textures—corrupting material schedules and rendering pipelines.",
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
      title: "MOT Area & Hospitality Spatial Compliance",
      badge: "Hospitality Compliance",
      subtitle: "Ministry of Tourism (MOT) Room Area & Spatial Compliance Sync",
      video: "assets/videos/update_mot_areas.mp4",
      description: "Automated spatial compliance tool built for luxury Maldives resort masterplans to calculate, verify, and synchronize room boundaries against Ministry of Tourism (MOT) area standards.",
      problem: "Maldives resort developments require strict adherence to MOT room area classifications. Manual verification and area parameter synchronization across hundreds of rooms and villas was labor-intensive and error-prone.",
      solution: "Developed an automated spatial sync tool that reads room geometry from 'TOTAL BUA PER UNIT' Area Plan views, categorizes 'Building Common Area' as Covered and 'Exterior Area' as Open, and writes compliant MOT area parameters directly into schedule headers.",
      impact: "Guarantees 100% audit-ready MOT submission schedules with zero human calculation error.",
      ribbonTools: [
        "Update MOT Areas (One-Click Spatial Sync)",
        "TOTAL BUA PER UNIT View Extractor",
        "Resort Compliance Schedules"
      ],
      tags: ["pyRevit", "MOT Compliance", "Resort BIM", "Area Calculations"],
      icon: "fas fa-chart-pie"
    },
    {
      id: "family-library",
      category: "automation",
      title: "BIM Family Cloud & Visual Asset Browser",
      badge: "Firm-Wide Asset Engine",
      subtitle: "Multi-Discipline Family Catalog with Studio-White 3D Previews",
      image: "assets/images/family_library_ui.png",
      video: "assets/videos/family_library.mp4",
      description: "A high-performance visual component browser for Revit that provides instant access to hundreds of verified, standardized architectural, structural, and MEP families with studio-white 3D previews.",
      problem: "Drafters frequently loaded outdated or corrupt families from scattered local hard drives, creating model inconsistencies and ballooning project file sizes.",
      solution: "Engineered an in-Revit visual catalog interface with discipline filter tabs (ARC, STR, PLU, FIRE, ACMV), real-time search, studio-white canvas previews, and 1-click loading into active models.",
      impact: "Cut family discovery and loading time by 90% while guaranteeing firm-wide component standardization.",
      ribbonTools: [
        "Multi-Discipline Asset Browser",
        "Studio-White 3D Thumbnail Canvas",
        "1-Click Direct Project Loading"
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
      id: "commercial-office",
      category: "bim",
      title: "Commercial Office Building (Arc & Str)",
      badge: "Commercial Multi-Story",
      subtitle: "Full-Scale Architectural & Structural BIM Coordination",
      video: "assets/videos/commercial_office_building.mp4",
      description: "Comprehensive multi-story commercial office facility modeled in Autodesk Revit. Coordinated architectural envelope, interior partitions, core circulation, and structural frame elements.",
      highlights: [
        "Production of detailed plan layouts, building sections, and external elevation drawing packages",
        "Coordination between Architectural and Structural disciplines to ensure structural alignment",
        "Implementation of custom schedules for doors, glazed partitions, and material finishes",
        "Adherence to strict municipal submission standards and client documentation guidelines"
      ],
      toolsUsed: ["Autodesk Revit", "AutoCAD", "BIM Worksharing", "Construction Drawings"],
      icon: "fas fa-building"
    },
    {
      id: "beach-villa",
      category: "bim",
      title: "Luxury Single-Bedroom Beach Villa with Skydeck",
      badge: "Hospitality & Resort",
      subtitle: "High-End Architectural Modeling & Bespoke Detail Documentation",
      description: "A luxury coastal resort villa featuring intricate architectural detailing, timber pergolas, panoramic glazing, cantilevered skydeck, and integrated interior casework.",
      highlights: [
        "High-fidelity LOD 350 architectural model encompassing foundation to bespoke roof profiles",
        "Parametric door and window families customized with ironmongery and glazing specifications",
        "Detailed interior millwork, bathroom casework, and outdoor timber sundeck modeling",
        "Coordinated with MEP engineers for concealed service routes and architectural ceiling drop integration"
      ],
      toolsUsed: ["Autodesk Revit", "Parametric Families", "LOD 350 Details", "Navisworks"],
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
      { name: "Parametric Family Creation & Shared Parameters", level: 95 },
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
