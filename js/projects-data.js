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
    { label: "D&W Schedules", value: "10x Faster", sub: "Automated View & Sheet Population" },
    { label: "BIM Modeling", value: "LOD 300+", sub: "Architectural & Structural Models" },
    { label: "Drawing Setup", value: "70% Faster", sub: "AutoCAD MCP & Keyplan Importers" },
    { label: "Documentation", value: "Zero Defect", sub: "Standardized Parameters & Tags" }
  ],

  tools: [
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
    },
    {
      id: "dw-scheduling",
      category: "automation",
      title: "Door & Window (D&W) Scheduling Suite",
      badge: "Flagship Revit Tool",
      subtitle: "Full-Cycle Legend Duplication & Sheet Schedule Placement",
      description: "An end-to-end automation tool developed for pyRevit that duplicates pristine template legend views, populates them with dynamic door/window components, and generates filtered schedule sheets.",
      problem: "Creating door and window schedules with elevations, dimensions, and schedule tables is one of the most tedious tasks in Revit, requiring days of manual view duplication and coordinate tracking.",
      solution: "Engineered a robust Revit workflow handling View.Duplicate(), element transformations via DB.Transform.Identity, SubTransaction commits, dynamic bounding-box calculation, and automated ScheduleSheetInstance placement.",
      impact: "Automated the entire D&W scheduling pipeline, turning an 8-hour repetitive drafting chore into a one-click process that runs in minutes.",
      tags: ["Revit API", "pyRevit", "Schedule Automation", "Legend Generation"],
      icon: "fas fa-table"
    },
    {
      id: "keyplan-importer",
      category: "automation",
      title: "Revit Keyplan Importer",
      badge: "Production Tool",
      subtitle: "Automated Keyplan Placement & Sheet Alignment",
      description: "Custom Revit pyRevit extension tool engineered to automatically import standardized keyplans and position them with pixel-perfect coordinate alignment across all drawing sheets.",
      problem: "Manually placing keyplans on dozens of individual sheets was repetitive, prone to inconsistent viewport positioning, and consumed hours of draughtsman time.",
      solution: "Created an intelligent Revit importer that reads sheet metadata, detects target titleblock insertion points, and snaps the corresponding level keyplan into place automatically.",
      impact: "Guaranteed 100% drawing alignment across all sheets while saving hours of manual placement per project submittal.",
      tags: ["pyRevit", "Keyplan Automation", "Sheet Layout", "Revit API"],
      icon: "fas fa-map"
    },
    {
      id: "parameter-adding",
      category: "automation",
      title: "Batch Parameter Management Suite",
      badge: "BIM Management",
      subtitle: "Multi-Category Shared Parameter Injection & Validation",
      description: "A specialized pyRevit utility that batch-injects project parameters and shared parameters across multiple element categories with automated default values and type/instance binding.",
      problem: "Setting up required BIM parameters across architectural and structural models manually was error-prone, resulting in missing tags and broken schedule filters.",
      solution: "Automated the parameter assignment protocol, allowing project leads to select parameter sets from presets and inject them across doors, windows, walls, and structural framing concurrently.",
      impact: "Zero parameter omission errors and instant consistency for downstream scheduling and specification tagging.",
      tags: ["pyRevit", "Shared Parameters", "Model Audit", "Standardization"],
      icon: "fas fa-sliders-h"
    },
    {
      id: "sheet-setup",
      category: "automation",
      title: "Sheet Setup Manager",
      badge: "Production Tool",
      subtitle: "Rapid Titleblock, Viewport & Revision Layout",
      description: "A productivity tool that streamlines the creation of standardized drawing sheet packages, titleblock population, viewport grid alignment, and revision schedule management.",
      problem: "Setting up hundreds of drawing sheets for large commercial submittals required repetitive manual creation, sheet numbering, and view drag-and-drops.",
      solution: "Built a batch sheet setup manager that generates drawing series with predefined naming standards, applies view templates, and aligns viewports uniformly.",
      impact: "Dramatically compressed project setup time and eliminated discrepancies in drawing titleblocks and sheet registers.",
      tags: ["Sheet Automation", "Titleblock Control", "View Templates", "pyRevit"],
      icon: "fas fa-layer-group"
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
        "High-fidelity LOD 300+ Revit architectural model tailored for luxury hospitality presentation",
        "Complex roof and skydeck detailing with structural timber-to-concrete interface drawings",
        "Comprehensive architectural sheet sets with fully tagged interior elevations and millwork schedules",
        "Precise quantity scheduling for custom tropical materials, architectural louvers, and joinery"
      ],
      toolsUsed: ["Autodesk Revit", "Detail Drafting", "Joinery Schedules", "Sheet Setup"],
      icon: "fas fa-umbrella-beach"
    },
    {
      id: "residential-dwelling",
      category: "bim",
      title: "Bedford Two-Story Residential Dwelling",
      badge: "Residential BIM",
      subtitle: "Complete Architectural BIM Lifecycle from Concept to Working Drawings",
      description: "A modern two-story family dwelling modeled and documented from initial architectural layout through council approval and full construction drawing submittals.",
      highlights: [
        "Creation of parametric door, window, and wall families customized to regional building codes",
        "Automated room area calculations, ceiling layout plans, and electrical fixture coordination",
        "Integration of automated D&W scheduling tools to deliver zero-error schedule packages",
        "Standardized sheet sets ready for on-site contractor execution"
      ],
      toolsUsed: ["Autodesk Revit", "Family Creation", "Room Schedules", "pyRevit Tools"],
      icon: "fas fa-home"
    },
    {
      id: "opalsl-doors",
      category: "bim",
      title: "OPALSL - LOD 300 Architectural Door Assemblies",
      badge: "Specialist Modeling",
      subtitle: "Standardized Parametric Family Libraries & Fabrication Documentation",
      description: "Extensive library development of LOD 300 parametric door assemblies, ironmongery specifications, and manufacturer-ready schedule documentation.",
      highlights: [
        "Engineered deeply parameterized Revit families with adjustable frame profiles, clearances, and hardware sets",
        "Embedded nested shared parameters for automated procurement and specification schedules",
        "Extensive 2D symbolic linework optimization for clean plan and elevation representation at all view scales",
        "Creation of standardized legend templates integrated with automated scheduling tools"
      ],
      toolsUsed: ["Revit Family Editor", "Shared Parameters", "LOD 300", "Technical Specifications"],
      icon: "fas fa-door-open"
    }
  ],

  skills: {
    bim: [
      { name: "Autodesk Revit (Architecture & Structure)", level: 96 },
      { name: "LOD 200 - LOD 350 Modeling", level: 92 },
      { name: "Construction & Working Drawings", level: 96 },
      { name: "Parametric Family Creation", level: 90 },
      { name: "Door, Window & Room Schedules", level: 98 },
      { name: "Sheet Setup & Titleblock Automation", level: 95 }
    ],
    draughting: [
      { name: "Engineering Draughtsmanship Standards", level: 98 },
      { name: "AutoCAD 2D/3D Detailing", level: 94 },
      { name: "Architectural Plans, Sections & Elevations", level: 96 },
      { name: "Structural Reinforcement & Framing Details", level: 90 },
      { name: "Building Codes & Documentation Standards", level: 92 }
    ],
    automation: [
      { name: "AutoCAD MCP Workflow Automation", level: 94 },
      { name: "Revit D&W Scheduling Automation", level: 98 },
      { name: "Keyplan Importer & Alignment Tools", level: 94 },
      { name: "Parameter Management Tools", level: 92 },
      { name: "pyRevit Tool Deployment & Optimization", level: 90 },
      { name: "AI-Assisted Workflow Engineering", level: 95 }
    ]
  }
};
