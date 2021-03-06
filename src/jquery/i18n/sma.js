(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["sma"] = $.extend(true, {}, en, {
        name: "sma",
        englishName: "Sami (Southern)",
        nativeName: "åarjelsaemiengiele",
        language: "sma",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currencies: {'':{
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }}
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': "-",
                firstDay: 1,
                days: {
                    names: ["aejlege","måanta","dæjsta","gaskevåhkoe","duarsta","bearjadahke","laavvardahke"],
                    namesAbbr: ["aej","måa","dæj","gask","duar","bearj","laav"],
                    namesShort: ["a","m","d","g","d","b","l"]
                },
                months: {
                    names: ["tsïengele","goevte","njoktje","voerhtje","suehpede","ruffie","snjaltje","mïetske","skïerede","golke","rahka","goeve",""],
                    namesAbbr: ["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]
                },
                monthsGenitive: {
                    names: ["tsïengelen","goevten","njoktjen","voerhtjen","suehpeden","ruffien","snjaltjen","mïetsken","skïereden","golken","rahkan","goeven",""],
                    namesAbbr: ["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]
                },
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "MMMM d'. b. 'yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "MMMM d'. b. 'yyyy HH:mm",
                    F: "MMMM d'. b. 'yyyy HH:mm:ss",
                    M: "MMMM d'. b. '",
                    Y: "MMMM yyyy",
                    l: "yyyy-MM-dd HH:mm",
                    L: "yyyy-MM-dd HH:mm:ss"
                }
            })
        }
    }, regions["sma"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
}(jQuery));