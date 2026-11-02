# Riyan Revit Fleet Family Library Synchronization Rules

## 1. Zero Hardcoded Absolute Paths in Catalogs (Universal Client Portability)
- Never write absolute paths containing username (`C:\Users\<user>\...`) or local OneDrive folders into `catalog.json`.
- All assets must use relative paths: `Thumbnails/<name>.png` and `Families/<name>.rfa`.
- Resolvers must dynamically anchor paths to the active pyRevit extension directory (`LOCAL_CACHE_DIR`).

## 2. Standalone RFA Availability Mandate (Zero Missing Remote Families)
- Every loadable family cataloged from a Master RVT must have a corresponding standalone `.rfa` file exported to `Library_Cache\Families\`.
- Never assume client PCs have access to Master `.rvt` files or SharePoint/OneDrive desktop sync.
- Resolvers must provide a JIT on-demand cloud fallback to download `.rfa` directly from GitHub if missing locally.

## 3. Strict Master RVT Level Architecture (Zero Unplaced Family Pollution)
- In Master Library RVT documents, ONLY scan elements that are physically placed on Levels.
- Never use generic `DB.FilteredElementCollector(doc).OfClass(DB.Family)` which pulls unplaced/junk families from the project browser.
- The Level Name strictly defines the Category (`cat = level.Name`).

## 4. Force Overwrite on Family Modification (Zero Stale Family Lock)
- When a family is modified inside a Master Library RVT, the sync engine must re-export and overwrite the `.rfa` file and update the catalog version/hash.
- Never block re-export solely because `os.path.exists(rfa)` is True.

## 5. Truthful Push Verification & Fail-Safe Reporting
- Background push scripts must verify GitHub authentication and remote push success before reporting completion.
- Never exit silently with `exit 0` when credentials fail. Log detailed telemetry to `%TEMP%\riyan_fleet_sync.log`.

## 6. Strict Revit 2025 Master Version Invariant (Zero Unauthorized Version Upgrades)
- **Revit 2025 Base Standard**: Riyan Central Library එකෙහි ඇති සියලුම Master RVT සහ standalone .RFA ගොනු 100% ක් Autodesk Revit 2025 මඟින් පමණක් නිර්මාණය, සංස්කරණය සහ නඩත්තු කළ යුතුය.
- **Zero 2026 Upgrades**: කිසිම හේතුවක් මත Master Library ගොනු Revit 2026 හෝ ඊට පසු සංස්කරණ වලින් Save නොකළ යුතුය. Revit backward compatibility නොමැති බැවින්, එසේ කළහොත් සමාගමේ ක්‍රියාත්මක වන Revit 2025 projects වලට එම families ලබාගත නොහැක.
- **Dedicated 2025 Launcher**: Tool එකේ "Edit Master in Revit 2025" බොත්තම strictly REVIT_2025_EXE (`C:\Program Files\Autodesk\Revit 2025\Revit.exe`) මඟින් පමණක් විවෘත විය යුතු අතර, Central Repository එකෙහි ඇති 2025 Master ගොනුවට පමණක් point විය යුතුය.

## 7. Universal 100-PC Fleet Real-Time Family Synchronization (Sri Lanka & Maldives)
- Master RVT ගොනු 6 හි (`01 ARC`, `02 STR`, `03 PLUMB`, `04 ELEC`, `05 FIRE`, `06 ACMV`) Levels මත place කර ඇති Family elements සම්බන්ධයෙන් සිදුවන පහත සියලුම වෙනස්කම් පරිශීලකයාගේ PC එකෙහි මෙන්ම, **ශ්‍රී ලංකාවේ සහ මාලදිවයිනේ පිහිටි පරිගණක 100 න් අහඹු ලෙස පරීක්ෂා කරන ඕනෑම PC එකක** Library Tool එක විවෘත කරන මොහොතේදීම 100% ක් එක හා සමානව සජීවීව ක්‍රියාත්මක විය යුතුය:
  1. **Family - Editing**: Family එකක Geometry, Parameters, හෝ Parameter Group වෙනස් කළ විට -> පරිශීලකයාගේ PC එකෙහි මෙන්ම ශ්‍රී ලංකා/මාලදිවයින් පරිගණක 100 පුරාම Library Tool එකෙහි ක්ෂණිකව අලුත්ම Family එක පමණක් දර්ශනය විය යුතුය. පරණ Family තබා ගැනීම සපුරා තහනම්ය.
  2. **Family - Adding**: අලුතින් එක්කරන ඕනෑම Family එකක් -> පරිශීලකයාගේ PC එකෙහි මෙන්ම ශ්‍රී ලංකා/මාලදිවයින් පරිගණක 100 පුරාම Tool එක විවෘත කරන සැණින් අදාළ Category එක තුළ දර්ශනය විය යුතුය.
  3. **Family - Deleting**: Level එකකින් යම් Family එකක් ඉවත් කළ විට -> පරිශීලකයාගේ PC එකෙහි මෙන්ම ශ්‍රී ලංකා/මාලදිවයින් පරිගණක 100 පුරාම Tool එක විවෘත කරන විට එය තවදුරටත් නොපෙනී සම්පූර්ණයෙන්ම Prune (Delete) වී තිබිය යුතුය.

## 8. Universal 100-PC Fleet Dynamic Level & Category Management (Sri Lanka & Maldives)
- Library Tool එකෙහි Categories 100% ක් තීරණය වන්නේ Master RVT ගොනුවල ඇති Levels අනුවය (`cat = level.Name`). මෙම නීතිය පරිශීලකයාගේ PC එකට මෙන්ම, **ශ්‍රී ලංකාවේ සහ මාලදිවයිනේ පරිගණක 100 න් අහඹු ලෙස පරීක්ෂා කරන ඕනෑම PC එකකට** එක හා සමානව අනිවාර්යයෙන්ම වලංගු වේ:
  1. **Level - Adding**: Master RVT එකට අලුතින් Level එකක් දැමූ සැණින් -> පරිශීලකයාගේ PC එකෙහි මෙන්ම ශ්‍රී ලංකා/මාලදිවයින් පරිගණක 100 පුරාම Library Tool එකෙහි අදාළ නව Category එක ස්වයංක්‍රීයව දිස්විය යුතුය.
  2. **Level - Editing (Renaming)**: Master RVT එකෙහි Level එකක නම සංස්කරණය කළ සැණින් -> පරිශීලකයාගේ PC එකෙහි මෙන්ම ශ්‍රී ලංකා/මාලදිවයින් පරිගණක 100 පුරාම Tool එකෙහි අදාළ Category නාමයද ඒ ආකාරයෙන්ම සංශෝධනය විය යුතුය.
  3. **Level - Deleting**: Master RVT එකෙන් Level එකක් Delete කළ විට -> පරිශීලකයාගේ PC එකෙහි මෙන්ම ශ්‍රී ලංකා/මාලදිවයින් පරිගණක 100 පුරාම Tool එක විවෘත කරන විට එම Category එකද Catalog එකෙන් සහ UI එකෙන් සම්පූර්ණයෙන්ම Prune (Delete) වී තිබිය යුතුය.

## 9. Universal 100-PC Fleet 3-Way Family Loading Mandate (Sri Lanka & Maldives)
- පරිශීලකයාගේ පරිගණකයේදී මෙන්ම, **ශ්‍රී ලංකාවේ හෝ මාලදිවයිනේ පිහිටි පරිගණක 100 න් අහඹු ලෙස පරීක්ෂා කරන ඕනෑම PC එකක** Library Tool එක විවෘත කර තෝරාගන්නා ඕනෑම Family එකක්:
  1. Drag and Drop මඟින් Canvas එක මතට ඇද දැමීමෙන්,
  2. Double-Click කිරීමෙන්, හෝ
  3. "Load Selected" බොත්තම එබීමෙන්,
  Revit Model එකට 100% සාර්ථකව Load විය යුතුය.
- Load විය යුත්තේ Master RVT එකේ අවසන් වරට Sync වූ මොහොතේ පැවති 100% අලුත්ම Family එක පමණි.

## 10. Zero User-Push Invariant (Single-Action User Responsibility)
- **පරිශීලකයාගේ එකම සහ අවසාන වගකීම**: Master Library RVT එකෙහි වෙනස්කම් සිදු කර Revit තුළ **"Synchronize with Central" / "Save" කිරීම පමණි**.
- **Zero Manual Git Push**: පරිශීලකයා ලවා Terminal එකෙන් push කරවීම, GitHub Desktop විවෘත කරවීම, manual commits ගැස්සවීම 100% ක් සපුරා තහනම් වේ.
- **Autonomous Fleet Pipeline**: Master RVT එක Sync වූ සැණින්:
  1. `hooks/doc-saved.py` හෝ sync trigger එක හරහා `library_sync.py` ක්‍රියාත්මක වීම.
  2. Thumbnails, .RFA binaries, සහ `catalog.json` atomic update වීම.
  3. `auto_push.ps1` background detached process එක හරහා නිහඬව Remote Fleet එකට push වීම.
  4. ශ්‍රී ලංකා/මාලදිවයින් PC 100 හි ඇති `library_fleet_sync.py` daemon එක මඟින් JIT downloads සිදු කරගැනීම.
  මෙම සම්පූර්ණ autonomous ක්‍රියාවලිය දෝෂ රහිතව සිදුවීම සඳහා CEO Agent සහ එහි පද්ධතිය 100% ක් පූර්ණ වගකීම දැරිය යුතුය.

## 11. Decoupled Silent Fleet Sync (Zero Version Bump Mandate)
- Master RVT වල සිදුවන Family / Level / Category වෙනස්කම් Riyan Tool Version Release (`version.txt` bump / toast alerts / BAT updates) සමඟ කිසිදු සම්බන්ධයක් නැත.
- Content වෙනස්කම් පරිගණක 100 ටම background daemon (`library_fleet_sync.py`) මඟින් නිහඬව JIT download විය යුතුය.
- Riyan Tool Version එකක් bump විය යුත්තේ පරිශීලකයා සෘජුවම අනුමත කරන Tool Code/UI වෙනස්කමකදී පමණි.

## 12. User-Exclusive Revit 2025 Master Edit Verification
- Master Library RVT ගොනු සංස්කරණය කිරීමේ අයිතිය ඇත්තේ පරිශීලකයාට (Dilupa) පමණි.
- Tool එකෙහි "Edit Master" බොත්තම strictly `C:\Program Files\Autodesk\Revit 2025\Revit.exe` මඟින් පමණක් Master RVT ගොනුව විවෘත වන බවත්, කිසිදු වෙනත් සංස්කරණයකින් හෝ පරිශීලකයෙකුගෙන් 2026+ ට upgrade නොවන බවත් තහවුරු කළ යුතුය.
