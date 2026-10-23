// Portfolio Projects & Tools Data for Dilupa Chathuranga

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
    { label: "D&W Schedules", value: ">25x Faster", sub: "Dynamic Tables, Dims & 20+ Params" },
    { label: "BIM Modeling", value: "LOD 300+", sub: "Architectural & Structural Models" },
    { label: "Drawing Setup", value: "70% Faster", sub: "AutoCAD MCP & Keyplan Importers" },
    { label: "Documentation", value: "Zero Defect", sub: "Standardized Parameters & Tags" }
  ],

  tools: [
    {
      id: "dw-scheduling",
      category: "automation",
      title: "Door & Window Dynamic Scheduling Suite",
      badge: "Flagship Automation",
      subtitle: "Batch 20+ Parameter Injection, Auto-Aligned Tables, Dynamic Dims & Instant Sync",
      video: "assets/videos/dw_schedule_data.mp4",
      image: "assets/images/revit_dw_ribbon_panel.png",
      description: "An end-to-end parametric Revit automation platform that completely replaces manual legend drafting and disconnected schedules with live model data, automated linear dimensioning, dynamic table alignment, and instant revision synchronization.",
      problem: "Traditional Revit D&W scheduling was a tedious, highly error-prone bottleneck: (1) Draughtsmen had to manually pull 10+ doors/windows from legends one by one. (2) Over 20 parameters and notes were typed as static plain text—leading to endless typos, zero model traceability, and no live links. (3) Linear dimensions had to be drawn by hand on every single view. (4) Whenever an architect or engineer changed a door or window type/size, the schedule tables stayed stuck on old, obsolete values—causing massive drawing discrepancies, costly site rework, and coordination confusion.",
      solution: "Engineered a custom, production-proven Revit Ribbon suite (Panel: 'Door & Window Schedules') powered by pyRevit and Revit API: • Batch Parameter Injection (20+ Params): Simultaneously injects and maps 20+ shared parameters across all door and window families with automated data feeds. • Live Dynamic Linking: Any change in family dimensions or properties feeds directly into schedules. • Auto-Aligning Tables: Automatically calculates layout coordinates and neatly aligns schedule tables based on actual element counts. • One-Click Sync ('Update Tables'): Instantly refreshes all table data against live model geometry with zero manual typing. • Automated Dynamic Dimensions ('Dims'): Programmatically snaps and places linear dimensions on elevations, updating automatically with geometry changes. • Global Smart Re-Tagging ('ReTagAll'): One-click re-tagging ensures every door and window is tagged accurately with zero duplicates.",
      impact: "Delivers a transformative leap in production velocity (>95% time reduction, slashing multi-day manual drafting to seconds). Completely eliminates manual text typos, manual dimensioning, and stale drawing schedule discrepancies.",
      ribbonTools: [
        "ReTagAll (Global Tag Sync)",
        "Add / Remove / Map",
        "Data (20+ Param Batch Injection)",
        "Table (Auto-Align Dynamic Tables)",
        "Update Tables (Instant Live Model Sync)",
        "Dims (Auto-Dimensioning Engine)"
      ],
      tags: ["Revit API", "pyRevit", "Dynamic Scheduling", "Auto-Dimensioning", "Batch Parameters", "Live Model Sync"],
      icon: "fas fa-table"
    },
    {
      id: "headless-batch-export",
      category: "automation",
      title: "Enterprise Batch Export & Archiving Suite (v2.0)",
      badge: "Flagship Production Tool",
      subtitle: "Vector Sheet Previews, Collision-Free Archiving & True Lifecycle Pipeline",
      video: "assets/videos/export_manager.mp4",
      description: "A high-performance production export & publishing platform built with pyRevit and custom WPF/XAML interfaces that processes closed and active Revit project files (.rvt) silently in the background—simultaneously outputting CAD (DWG), individual sheet PDFs, and an assembled multi-page Combined Set PDF with live vector previews and intelligent deliverable archiving.",
      problem: "BIM submittal and delivery deadlines suffer from severe workstation bottlenecks: • Opening large 200MB–800MB Revit project models takes 15–30 minutes per file, completely locking up drafters' machines. • Manual single-sheet CAD and PDF exporting requires hours of tedious clicking and continuous supervision, prone to missing revisions or sheet order mixups. • Traditional export scripts blindly archive or overwrite entire output folders, accidentally sweeping deliverables from other buildings or drawings into previous folders. • Background Revit documents left in memory cause worksharing lockups and freeze the Revit process upon exit.",
      solution: "Engineered an enterprise-grade Revit automation suite (Panel: 'Export') featuring: • Headless Background Multi-File Engine: Concurrently processes multiple models in memory without graphical view overhead. • Interactive Inline Vector Sheet Preview: Dynamic rendering pipeline delivering crisp vector previews for 2D plans with smart raster fallback for 3D/shaded views, complete with click-to-zoom inspection. • Smart Exact-Name Selective Archiving: Scans destination directories and moves ONLY previous files whose exact filenames collide with current deliverables into collision-aware versions (00 PREVIOUS/<Date>/<01, 02>), preserving unrelated project deliverables 100% untouched. • True Lifecycle Pipeline (Pending ➔ Exporting... ➔ Done): Individual single sheets export sequentially with live progress badges, compiling the unified Combined PDF and generating an automated Excel Drawing List Transmittal only after all singles succeed. • Zero-Hang Memory Shield: Instant document disposal (doc.Close(False)) after reading metadata and exports, with guaranteed window close hooks preventing memory leaks and Revit exit freezes. • Future-Proof Compatibility: Dynamically supports Revit 2022 through Revit 2026 (active production) and 2027+.",
      impact: "Slashes drawing submittal delivery time by over 85%, guarantees zero accidental deliverable overwrites across multi-building projects, and provides drafters with instant vector visual verification without opening bulky project models.",
      ribbonTools: [
        "Inline Vector Preview & Click-to-Zoom",
        "Smart Exact-Name Archiving (00 PREVIOUS)",
        "True Lifecycle Pipeline (Pending ➔ Done)",
        "Standardized WPF Pill Status Badges",
        "Automated Excel Drawing List Transmittal",
        "Zero-Hang Background Document Shield",
        "Revit 2022–2026 Production | 2027+ Ready"
      ],
      tags: ["Revit API", "pyRevit", "Batch Export v2.0", "Vector Preview", "Smart Archiving", "WPF / XAML", "Enterprise Memory Management", "Revit 2022-2027+"],
      icon: "fas fa-file-export"
    },
    {
      id: "coordination-masterplan",
      category: "coordination",
      title: "Multi-Discipline Masterplan & Villa Replicator Suite",
      badge: "Masterplan Automation",
      subtitle: "Automated Villa Staging, Named Sites Generation & mm-Precision Multi-Discipline Replication",
      video: "assets/videos/replicate_master.mp4",
      description: "A comprehensive pyRevit coordination suite developed for multi-villa island masterplans (100+ units) in the Maldives, automating Named Sites generation, sequential link staging, and exact millimeter-precision replication across all engineering disciplines.",
      problem: "Coordinating 100+ water villas across an island in Maldives required weeks of manual model linking, workset creation, and coordinate alignment across Architectural (ARC), Structural (STR), Mechanical (MEP), Electrical (ELE), and Plumbing (PLU) master models. Manual placement invited coordinate drift and severe modeling mismatches.",
      solution: "Engineered a high-velocity 3-module coordination suite on the 'Coordination' ribbon panel: • Site Generator: Automatically discovers villa clusters, preserves survey coordinates, and publishes all Named Sites in one single click without coordinate drift. • Stage Links: Scans project folders for FOH, BOH, and Villa models, creates corresponding Worksets, and stages links neatly south of the island in sequential order. • Replicate Master: Reads placed building coordinates, rotations (θ), and workset assignments directly from the ARC Master Model, and automatically batch-links and replicates STR, MEP, ELE, and PLU models at exact millimeter positions into clean discipline masters.",
      impact: "Compressed weeks of tedious multi-discipline model linking into seconds. Completely eliminated coordinate drift, rotation errors, and workset misalignment across 100+ island villas.",
      ribbonTools: [
        "Site Generator (Automated Named Sites Publishing)",
        "Stage Links (Batch Link Discovery & Staging Line)",
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
      title: "Revit Keyplan Importer & Coordinate Aligner",
      badge: "Production Tool",
      subtitle: "Automated DWG Keyplan Clean, Import & TitleBlock Alignment",
      video: "assets/videos/keyplan_importer.mp4",
      description: "Custom Revit pyRevit extension tool engineered to automatically import standardized keyplans, clean CAD geometry, and position them with pixel-perfect coordinate alignment across all drawing sheets.",
      problem: "Manually placing keyplans on dozens of individual sheets was repetitive, prone to inconsistent viewport positioning, and consumed hours of draughtsman time per submittal package.",
      solution: "Created an intelligent Revit importer that reads sheet metadata, detects target titleblock insertion points, and snaps the corresponding level keyplan into place automatically.",
      impact: "Guaranteed 100% drawing alignment across all sheets while saving hours of manual placement per project submittal.",
      ribbonTools: [
        "Batch CAD Keyplan Importer",
        "Pixel-Perfect Coordinate Snapping",
        "TitleBlock Insertion Point Detector"
      ],
      tags: ["pyRevit", "Keyplan Automation", "Sheet Layout", "Revit API"],
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
      subtitle: "Automated Family Material Auditing & Strict RYN_MAT Standardization",
      video: "assets/videos/material_auditor.mp4",
      description: "Quality assurance utility that scans and standardizes family materials against corporate RYN_MAT criteria across architectural and structural models.",
      problem: "Imported families and third-party vendor models frequently introduced non-standard material names, missing render assets, and unlinked textures—corrupting material schedules and rendering pipelines.",
      solution: "Engineered an automated Material Auditor that scans active and linked families, compares material definitions against standard criteria, and batch-standardizes material tags in one click.",
      impact: "Guaranteed 100% material compliance and zero schedule discrepancies across all project models.",
      ribbonTools: [
        "Family Material Auditor",
        "RYN_MAT Criteria Standardizer",
        "Batch Parameter Remapping"
      ],
      tags: ["pyRevit", "Material Audit", "RYN_MAT Criteria", "Quality Assurance"],
      icon: "fas fa-paint-roller"
    },
    {
      id: "structural-automation",
      category: "structure",
      title: "Structural Engineering Detailing Suite",
      badge: "Structural Automation",
      subtitle: "Smart Connect, SplitColumn & Projected Beams Auto-Snapping",
      video: "assets/videos/project_beams.mp4",
      description: "A suite of structural engineering pyRevit tools designed to automate structural framing alignment, column level splitting, and analytical joint connectivity.",
      problem: "Structural modellers spend hours manually extending and trimming beam centerlines to complex sloped roof surfaces, splitting multi-story columns at floor slabs, and correcting unjoined structural framing joints.",
      solution: "Developed structural automation tools: • Smart Connect: Automatically heals framing joints without manual trimming. • SplitColumn: Accurately splits continuous columns at selected target levels while preserving elevation offsets. • ProjectBeams: Calculates 3D geometric vectors and mathematically snaps rafter and purlin centerlines to sloped roof or slab planes in a single pass without distorting plan (X, Y) coordinates.",
      impact: "Saves dozens of hours in structural framing setup and ensures flawless analytical model geometry for Robot Structural Analysis and Navisworks.",
      ribbonTools: [
        "Smart Connect (Framing Joint Healer)",
        "SplitColumn (Multi-Level Column Splitter)",
        "ProjectBeams (Single-Pass Surface Snapping)"
      ],
      tags: ["Revit API", "Structural Detailing", "Smart Connect", "Beam Projection", "Column Splitting"],
      icon: "fas fa-cubes"
    },
    {
      id: "update-mot-areas",
      category: "automation",
      title: "MOT Area & Spatial Compliance Synchronizer",
      badge: "Hospitality Compliance",
      subtitle: "Ministry of Tourism (MOT) Room Area & Spatial Compliance Sync",
      video: "assets/videos/update_mot_areas.mp4",
      description: "Automated spatial compliance tool built for luxury Maldives resort masterplans to calculate, verify, and synchronize room boundaries against Ministry of Tourism (MOT) area standards.",
      problem: "Maldives resort developments require strict adherence to MOT room area classifications. Manual verification and area parameter synchronization across hundreds of rooms and villas was labor-intensive and error-prone.",
      solution: "Developed an automated spatial sync tool that reads room geometry, calculates net and gross usable floor areas, and writes compliant MOT area parameters directly into schedule headers.",
      impact: "Guarantees 100% audit-ready MOT submission schedules with zero human calculation error.",
      ribbonTools: [
        "Update MOT Areas (One-Click Spatial Sync)",
        "Boundary Extraction Engine",
        "Resort Compliance Schedules"
      ],
      tags: ["pyRevit", "MOT Compliance", "Resort BIM", "Area Calculations"],
      icon: "fas fa-chart-pie"
    },
    {
      id: "family-library",
      category: "automation",
      title: "Riyan Family Cloud & Visual Asset Browser",
      badge: "Firm-Wide Asset Engine",
      subtitle: "Multi-Discipline Family Catalog with Real-Time 3D Thumbnails",
      video: "assets/videos/family_library.mp4",
      description: "A high-performance visual component browser for Revit that provides instant access to hundreds of verified, standardized architectural, structural, and MEP families with 3D thumbnails.",
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
