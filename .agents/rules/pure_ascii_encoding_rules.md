# Pure Standard ASCII & Zero Mojibake Guardrail (අක්ෂර විකෘති වීම වැළැක්වීමේ නීතිය)

## 1. 100% Pure Standard ASCII Mandate
- Portfolio වෙබ් අඩවි (`index.html`, `js/*.js`, `css/*.css`), pyRevit bundle files (`bundle.yaml`), සහ Python scripts තුළ කිසිදු අවස්ථාවක Unicode Em-dash (`—`), En-dash (`–`), Bullets (`•`), හෝ Curly Quotes (`“ ” ‘ ’`) භාවිත නොකළ යුතුය.
- සියලුම dashes සඳහා සාමාන්‍ය standard ASCII hyphen (`-` හෝ ` - `) පමණක් භාවිත කළ යුතුය.
- සියලුම quotes සඳහා standard ASCII straight quotes (`"`, `'`) පමණක් භාවිත කළ යුතුය.
- Bullets වෙනුවට standard ASCII hyphens (`- `) පමණක් භාවිත කළ යුතුය.

## 2. Mandatory Pre-Commit Encoding Verification
- කිසියම් වෙබ් ගොනුවක් හෝ tooltip එකක් සංස්කරණය කළ පසු, commit කිරීමට පෙර non-ASCII characters (`ord(c) > 127`) අඩංගුදැයි ස්වයංක්‍රීයව scan කර තහවුරු කළ යුතුය.
- කිසිදු `â`, `€`, `™`, `Ã` වැනි mojibake හෝ විකාර අක්ෂර ගොනු තුළ ඉතිරි නොවිය යුතුය.
- Codebase එකේ files වලට ලියන විට pure ASCII (0-127) පමණක් භාවිත කරමින් අක්ෂර විකෘති වීම (mojibake) 100% ක් වැළැක්විය යුතුය.
