// =====================================================
// MARINE ENGINEER ENGLISH — СЛОВАРЬ (часть 1 из 4)
// =====================================================

const WORDS = [
  // ============ CREW (ЭКИПАЖ) — 14 слов ============
  { word: "crew", translation: "экипаж", transcription: "[kruː]", topic: "crew", example: "The crew consists of 22 people." },
  { word: "chief engineer", translation: "старший механик", transcription: "[tʃiːf endʒɪˈnɪə]", topic: "crew", example: "The chief engineer is responsible for all ship's machinery." },
  { word: "second engineer", translation: "второй механик", transcription: "[ˈsekənd endʒɪˈnɪə]", topic: "crew", example: "The Second Engineer supervises daily work." },
  { word: "third engineer", translation: "третий механик", transcription: "[θɜːd endʒɪˈnɪə]", topic: "crew", example: "The Third Engineer is responsible for bunkering." },
  { word: "fourth engineer", translation: "четвёртый механик", transcription: "[fɔːθ endʒɪˈnɪə]", topic: "crew", example: "The Fourth Engineer maintains the boilers." },
  { word: "electrician", translation: "электромеханик", transcription: "[ɪlekˈtrɪʃən]", topic: "crew", example: "The electrician repairs the electrical equipment." },
  { word: "motorman", translation: "моторист", transcription: "[ˈməʊtəmæn]", topic: "crew", example: "The motorman checks the engine every hour." },
  { word: "wiper", translation: "моторист 2-го класса", transcription: "[ˈwaɪpə]", topic: "crew", example: "The wiper cleans the engine room." },
  { word: "fitter", translation: "слесарь", transcription: "[ˈfɪtə]", topic: "crew", example: "The fitter repaired the fuel pump." },
  { word: "welder", translation: "сварщик", transcription: "[ˈweldə]", topic: "crew", example: "The welder welded the crack in the pipe." },
  { word: "bosun", translation: "боцман", transcription: "[ˈbəʊsən]", topic: "crew", example: "The bosun is in charge of the deck crew." },
  { word: "AB seaman", translation: "матрос 1-го класса", transcription: "[eɪ biː ˈsiːmən]", topic: "crew", example: "The AB seaman keeps watch on the bridge." },
  { word: "cook", translation: "кок", transcription: "[kʊk]", topic: "crew", example: "The cook prepares meals in the galley." },
  { word: "steward", translation: "стюард", transcription: "[ˈstjuːəd]", topic: "crew", example: "The steward serves food in the mess-room." },

  // ============ VESSEL (СУДНО) — 20 слов ============
  { word: "anchor", translation: "якорь", transcription: "[ˈæŋkə]", topic: "vessel", example: "The anchor was lowered into the water." },
  { word: "bow", translation: "нос", transcription: "[baʊ]", topic: "vessel", example: "The bow of the ship hit the pier." },
  { word: "stern", translation: "корма", transcription: "[stɜːn]", topic: "vessel", example: "The stern is at the back of the ship." },
  { word: "bridge", translation: "мостик", transcription: "[brɪdʒ]", topic: "vessel", example: "The captain is on the bridge." },
  { word: "deck", translation: "палуба", transcription: "[dek]", topic: "vessel", example: "The deck is being painted." },
  { word: "hull", translation: "корпус", transcription: "[hʌl]", topic: "vessel", example: "The hull is made of steel." },
  { word: "propeller", translation: "гребной винт", transcription: "[prəˈpelə]", topic: "vessel", example: "The propeller rotates to move the ship." },
  { word: "rudder", translation: "руль", transcription: "[ˈrʌdə]", topic: "vessel", example: "The rudder is used for steering." },
  { word: "funnel", translation: "труба", transcription: "[ˈfʌnəl]", topic: "vessel", example: "The funnel releases exhaust gases." },
  { word: "lifeboat", translation: "спасательная шлюпка", transcription: "[ˈlaɪfbəʊt]", topic: "vessel", example: "The lifeboat is on the upper deck." },
  { word: "radar", translation: "радар", transcription: "[ˈreɪdɑː]", topic: "vessel", example: "The radar shows other ships nearby." },
  { word: "cabin", translation: "каюта", transcription: "[ˈkæbɪn]", topic: "vessel", example: "My cabin is on the third deck." },
  { word: "galley", translation: "камбуз", transcription: "[ˈɡæli]", topic: "vessel", example: "The cook works in the galley." },
  { word: "hold", translation: "трюм", transcription: "[həʊld]", topic: "vessel", example: "The cargo is stored in the hold." },
  { word: "engine-room", translation: "машинное отделение", transcription: "[ˈendʒɪn ruːm]", topic: "vessel", example: "The engine-room is below the waterline." },
  { word: "boiler room", translation: "котельная", transcription: "[ˈbɔɪlə ruːm]", topic: "vessel", example: "The boiler room is next to the engine-room." },
  { word: "pump room", translation: "насосное отделение", transcription: "[pʌmp ruːm]", topic: "vessel", example: "The pump room is on tankers." },
  { word: "superstructure", translation: "надстройка", transcription: "[ˈsuːpəstrʌktʃə]", topic: "vessel", example: "The superstructure is above the main deck." },
  { word: "forecastle", translation: "бак", transcription: "[ˈfəʊksl]", topic: "vessel", example: "The forecastle is at the front of the ship." },
  { word: "poop deck", translation: "полуют", transcription: "[puːp dek]", topic: "vessel", example: "The poop deck is at the stern." },

  // ============ TYPES (ТИПЫ СУДОВ) — 15 слов ============
  { word: "bulk carrier", translation: "балкер", transcription: "[bʌlk ˈkæriə]", topic: "types", example: "A bulk carrier transports dry cargo." },
  { word: "tanker", translation: "танкер", transcription: "[ˈtæŋkə]", topic: "types", example: "The tanker carries crude oil." },
  { word: "container ship", translation: "контейнеровоз", transcription: "[kənˈteɪnə ʃɪp]", topic: "types", example: "The container ship carries boxes." },
  { word: "cruise liner", translation: "круизный лайнер", transcription: "[kruːz ˈlaɪnə]", topic: "types", example: "The cruise liner carries passengers." },
  { word: "ice-breaker", translation: "ледокол", transcription: "[ˈaɪs breɪkə]", topic: "types", example: "The ice-breaker breaks the ice." },
  { word: "ferry", translation: "паром", transcription: "[ˈferi]", topic: "types", example: "The ferry crosses the channel." },
  { word: "fishing vessel", translation: "рыболовное судно", transcription: "[ˈfɪʃɪŋ ˈvesəl]", topic: "types", example: "The fishing vessel catches fish." },
  { word: "tug", translation: "буксир", transcription: "[tʌɡ]", topic: "types", example: "The tug pulls the ship into port." },
  { word: "supply vessel", translation: "судно снабжения", transcription: "[səˈplaɪ ˈvesəl]", topic: "types", example: "The supply vessel brings provisions." },
  { word: "LNG carrier", translation: "газовоз", transcription: "[el en dʒiː ˈkæriə]", topic: "types", example: "The LNG carrier transports gas." },
  { word: "ro-ro ship", translation: "судно типа ро-ро", transcription: "[rəʊ rəʊ ʃɪp]", topic: "types", example: "The ro-ro ship carries vehicles." },
  { word: "general cargo vessel", translation: "сухогруз", transcription: "[ˈdʒenərəl ˈkɑːɡəʊ ˈvesəl]", topic: "types", example: "A general cargo vessel carries various goods." },
  { word: "chemical tanker", translation: "танкер-химовоз", transcription: "[ˈkemɪkəl ˈtæŋkə]", topic: "types", example: "The chemical tanker carries hazardous liquids." },
  { word: "reefer", translation: "рефрижератор", transcription: "[ˈriːfə]", topic: "types", example: "The reefer carries frozen cargo." },
  { word: "coaster", translation: "каботажное судно", transcription: "[ˈkəʊstə]", topic: "types", example: "The coaster sails along the coast." },

  // ============ SAFETY (БЕЗОПАСНОСТЬ) — 20 слов ============
  { word: "fire extinguisher", translation: "огнетушитель", transcription: "[ˈfaɪə ɪkˈstɪŋɡwɪʃə]", topic: "safety", example: "Use a fire extinguisher for small fires." },
  { word: "life jacket", translation: "спасательный жилет", transcription: "[laɪf ˈdʒækɪt]", topic: "safety", example: "Put on your life jacket before abandoning ship." },
  { word: "life raft", translation: "спасательный плот", transcription: "[laɪf rɑːft]", topic: "safety", example: "The life raft inflates automatically." },
  { word: "life buoy", translation: "спасательный круг", transcription: "[laɪf ˈbɔɪ]", topic: "safety", example: "Throw the life buoy to the man overboard." },
  { word: "alarm", translation: "тревога", transcription: "[əˈlɑːm]", topic: "safety", example: "Raise the alarm when you see fire." },
  { word: "drill", translation: "учебная тревога", transcription: "[drɪl]", topic: "safety", example: "We have a fire drill every month." },
  { word: "muster station", translation: "место сбора", transcription: "[ˈmʌstə ˈsteɪʃən]", topic: "safety", example: "Go to your muster station immediately." },
  { word: "emergency exit", translation: "аварийный выход", transcription: "[ɪˈmɜːdʒənsi ˈeksɪt]", topic: "safety", example: "The emergency exit is at the end of the corridor." },
  { word: "first aid box", translation: "аптечка", transcription: "[fɜːst eɪd bɒks]", topic: "safety", example: "The first aid box is in the mess-room." },
  { word: "safety helmet", translation: "защитная каска", transcription: "[ˈseɪfti ˈhelmɪt]", topic: "safety", example: "Always wear a safety helmet on deck." },
  { word: "gloves", translation: "перчатки", transcription: "[ɡlʌvz]", topic: "safety", example: "Wear gloves when handling chemicals." },
  { word: "goggles", translation: "защитные очки", transcription: "[ˈɡɒɡəlz]", topic: "safety", example: "Use goggles when chipping paint." },
  { word: "to extinguish fire", translation: "тушить пожар", transcription: "[ɪkˈstɪŋɡwɪʃ ˈfaɪə]", topic: "safety", example: "We must extinguish the fire quickly." },
  { word: "to evacuate", translation: "эвакуировать", transcription: "[ɪˈvækjueɪt]", topic: "safety", example: "Evacuate all crew from the engine room." },
  { word: "fire alarm", translation: "пожарная сигнализация", transcription: "[ˈfaɪə əˈlɑːm]", topic: "safety", example: "The fire alarm started at 3 a.m." },
  { word: "breathing apparatus", translation: "дыхательный аппарат", transcription: "[ˈbriːðɪŋ ˌæpəˈreɪtəs]", topic: "safety", example: "Wear breathing apparatus in smoke." },
  { word: "fire hose", translation: "пожарный рукав", transcription: "[ˈfaɪə həʊz]", topic: "safety", example: "Connect the fire hose to the hydrant." },
  { word: "safety shoes", translation: "защитная обувь", transcription: "[ˈseɪfti ʃuːz]", topic: "safety", example: "Always wear safety shoes in the engine-room." },
  { word: "ear protection", translation: "защита слуха", transcription: "[ɪə prəˈtekʃən]", topic: "safety", example: "Use ear protection in noisy areas." },
  { word: "man overboard", translation: "человек за бортом", transcription: "[mæn ˈəʊvəbɔːd]", topic: "safety", example: "Shout 'Man overboard!' immediately." },

  // ============ ENGINE (ДВИГАТЕЛЬ) — 25 слов ============
  { word: "diesel engine", translation: "дизельный двигатель", transcription: "[ˈdiːzəl ˈendʒɪn]", topic: "engine", example: "The diesel engine uses heavy fuel oil." },
  { word: "piston", translation: "поршень", transcription: "[ˈpɪstən]", topic: "engine", example: "The piston moves up and down." },
  { word: "cylinder", translation: "цилиндр", transcription: "[ˈsɪlɪndə]", topic: "engine", example: "The cylinder liner needs replacement." },
  { word: "cylinder liner", translation: "втулка цилиндра", transcription: "[ˈsɪlɪndə ˈlaɪnə]", topic: "engine", example: "The cylinder liner is worn out." },
  { word: "cylinder head", translation: "головка цилиндра", transcription: "[ˈsɪlɪndə hed]", topic: "engine", example: "The cylinder head was removed for inspection." },
  { word: "crankshaft", translation: "коленчатый вал", transcription: "[ˈkræŋkʃɑːft]", topic: "engine", example: "The crankshaft converts motion to rotation." },
  { word: "camshaft", translation: "распредвал", transcription: "[ˈkæmʃɑːft]", topic: "engine", example: "The camshaft controls valve timing." },
  { word: "connecting rod", translation: "шатун", transcription: "[kəˈnektɪŋ rɒd]", topic: "engine", example: "The connecting rod links piston to crankshaft." },
  { word: "fuel injection valve", translation: "топливная форсунка", transcription: "[ˈfjuːəl ɪnˈdʒekʃən vælv]", topic: "engine", example: "The fuel injection valve opens at the right time." },
  { word: "injector", translation: "инжектор", transcription: "[ɪnˈdʒektə]", topic: "engine", example: "The injector sprays fuel into the cylinder." },
  { word: "turbocharger", translation: "турбокомпрессор", transcription: "[ˈtɜːbəʊtʃɑːdʒə]", topic: "engine", example: "The turbocharger increases engine power." },
  { word: "combustion chamber", translation: "камера сгорания", transcription: "[kəmˈbʌstʃən ˈtʃeɪmbə]", topic: "engine", example: "Fuel burns in the combustion chamber." },
  { word: "compression", translation: "сжатие", transcription: "[kəmˈpreʃən]", topic: "engine", example: "Compression ignites the fuel." },
  { word: "bearing", translation: "подшипник", transcription: "[ˈbeərɪŋ]", topic: "engine", example: "The bearing reduces friction." },
  { word: "crankcase", translation: "картер", transcription: "[ˈkræŋkeɪs]", topic: "engine", example: "Oil is stored in the crankcase." },
  { word: "four-stroke cycle", translation: "четырёхтактный цикл", transcription: "[fɔː strəʊk ˈsaɪkəl]", topic: "engine", example: "The four-stroke cycle has 4 phases." },
  { word: "two-stroke cycle", translation: "двухтактный цикл", transcription: "[tuː strəʊk ˈsaɪkəl]", topic: "engine", example: "The two-stroke engine has fewer parts." },
  { word: "exhaust valve", translation: "выпускной клапан", transcription: "[ɪɡˈzɔːst vælv]", topic: "engine", example: "The exhaust valve releases gases." },
  { word: "inlet valve", translation: "впускной клапан", transcription: "[ˈɪnlet vælv]", topic: "engine", example: "The inlet valve opens during intake stroke." },
  { word: "intake stroke", translation: "такт впуска", transcription: "[ˈɪnteɪk strəʊk]", topic: "engine", example: "Air enters during the intake stroke." },
  { word: "power stroke", translation: "рабочий такт", transcription: "[ˈpaʊə strəʊk]", topic: "engine", example: "The power stroke produces energy." },
  { word: "main engine", translation: "главный двигатель", transcription: "[meɪn ˈendʒɪn]", topic: "engine", example: "The main engine propels the ship." },
  { word: "auxiliary engine", translation: "вспомогательный двигатель", transcription: "[ɔːɡˈzɪljəri ˈendʒɪn]", topic: "engine", example: "Auxiliary engines generate electricity." },
  { word: "flywheel", translation: "маховик", transcription: "[ˈflaɪwiːl]", topic: "engine", example: "The flywheel stores rotational energy." },
  { word: "bedplate", translation: "фундаментная плита", transcription: "[ˈbedpleɪt]", topic: "engine", example: "The bedplate supports the engine." },

  // ============ FUEL (ТОПЛИВО) — 15 слов ============
  { word: "fuel oil", translation: "тяжёлое топливо", transcription: "[ˈfjuːəl ɔɪl]", topic: "fuel", example: "Fuel oil is used in marine engines." },
  { word: "diesel oil", translation: "дизельное топливо", transcription: "[ˈdiːzəl ɔɪl]", topic: "fuel", example: "Diesel oil is used for auxiliary engines." },
  { word: "heavy fuel oil", translation: "мазут", transcription: "[ˈhevi ˈfjuːəl ɔɪl]", topic: "fuel", example: "Heavy fuel oil is cheaper than diesel." },
  { word: "service tank", translation: "расходный бак", transcription: "[ˈsɜːvɪs tæŋk]", topic: "fuel", example: "Fuel is taken from the service tank." },
  { word: "settling tank", translation: "отстойный бак", transcription: "[ˈsetlɪŋ tæŋk]", topic: "fuel", example: "Water settles in the settling tank." },
  { word: "supply pump", translation: "питательный насос", transcription: "[səˈplaɪ pʌmp]", topic: "fuel", example: "The supply pump feeds the engine." },
  { word: "circulating pump", translation: "циркуляционный насос", transcription: "[ˈsɜːkjʊleɪtɪŋ pʌmp]", topic: "fuel", example: "The circulating pump moves fuel around." },
  { word: "heater", translation: "подогреватель", transcription: "[ˈhiːtə]", topic: "fuel", example: "The heater warms heavy fuel oil." },
  { word: "filter", translation: "фильтр", transcription: "[ˈfɪltə]", topic: "fuel", example: "The filter removes dirt from fuel." },
  { word: "separator", translation: "сепаратор", transcription: "[ˈsepəreɪtə]", topic: "fuel", example: "The separator removes water and dirt." },
  { word: "viscosity", translation: "вязкость", transcription: "[vɪsˈkɒsɪti]", topic: "fuel", example: "Viscosity is important for fuel injection." },
  { word: "fuel line", translation: "топливная магистраль", transcription: "[ˈfjuːəl laɪn]", topic: "fuel", example: "Check the fuel line for leaks." },
  { word: "day tank", translation: "расходная цистерна", transcription: "[deɪ tæŋk]", topic: "fuel", example: "The day tank supplies fuel to the engine." },
  { word: "overflow tank", translation: "переливная цистерна", transcription: "[ˈəʊvəfləʊ tæŋk]", topic: "fuel", example: "The overflow tank collects excess fuel." },
  { word: "to bunker", translation: "бункеровать", transcription: "[ˈbʌŋkə]", topic: "fuel", example: "We bunker fuel in every port." },

  // ============ LUBE (СМАЗКА) — 12 слов ============
  { word: "lubricating oil", translation: "смазочное масло", transcription: "[ˈluːbrɪkeɪtɪŋ ɔɪl]", topic: "lube", example: "Lubricating oil reduces friction." },
  { word: "oil pump", translation: "масляный насос", transcription: "[ɔɪl pʌmp]", topic: "lube", example: "The oil pump supplies oil to bearings." },
  { word: "oil cooler", translation: "маслоохладитель", transcription: "[ɔɪl ˈkuːlə]", topic: "lube", example: "The oil cooler lowers oil temperature." },
  { word: "oil filter", translation: "масляный фильтр", transcription: "[ɔɪl ˈfɪltə]", topic: "lube", example: "The oil filter cleans the lubricating oil." },
  { word: "sump", translation: "поддон", transcription: "[sʌmp]", topic: "lube", example: "Oil collects in the sump." },
  { word: "gravity tank", translation: "гравитационный бак", transcription: "[ˈɡrævɪti tæŋk]", topic: "lube", example: "Cylinder oil comes from a gravity tank." },
  { word: "cylinder lubricator", translation: "лубрикатор цилиндра", transcription: "[ˈsɪlɪndə ˈluːbrɪkeɪtə]", topic: "lube", example: "The cylinder lubricator oils the liner." },
  { word: "lubrication", translation: "смазка", transcription: "[ˌluːbrɪˈkeɪʃən]", topic: "lube", example: "Regular lubrication prevents wear." },
  { word: "friction", translation: "трение", transcription: "[ˈfrɪkʃən]", topic: "lube", example: "Friction causes heat and wear." },
  { word: "oil mist detector", translation: "детектор масляного тумана", transcription: "[ɔɪl mɪst dɪˈtektə]", topic: "lube", example: "The oil mist detector warns of crankcase explosion." },
  { word: "oil consumption", translation: "расход масла", transcription: "[ɔɪl kənˈsʌmpʃən]", topic: "lube", example: "Monitor oil consumption daily." },
  { word: "to top up", translation: "доливать", transcription: "[tə tɒp ʌp]", topic: "lube", example: "Top up the oil to the correct level." },

  // ============ COOLING (ОХЛАЖДЕНИЕ) — 12 слов ============
  { word: "cooling water", translation: "охлаждающая вода", transcription: "[ˈkuːlɪŋ ˈwɔːtə]", topic: "cooling", example: "Cooling water removes heat from the engine." },
  { word: "jacket water", translation: "вода рубашки охлаждения", transcription: "[ˈdʒækɪt ˈwɔːtə]", topic: "cooling", example: "Jacket water cools the cylinder liners." },
  { word: "sea water", translation: "забортная вода", transcription: "[siː ˈwɔːtə]", topic: "cooling", example: "Sea water is used in the central cooler." },
  { word: "fresh water", translation: "пресная вода", transcription: "[freʃ ˈwɔːtə]", topic: "cooling", example: "Fresh water is used in a closed system." },
  { word: "heat exchanger", translation: "теплообменник", transcription: "[hiːt ɪksˈtʃeɪndʒə]", topic: "cooling", example: "The heat exchanger cools the oil." },
  { word: "thermostatic valve", translation: "термостатический клапан", transcription: "[θɜːməˈstætɪk vælv]", topic: "cooling", example: "The thermostatic valve controls temperature." },
  { word: "central cooler", translation: "центральный охладитель", transcription: "[ˈsentrəl ˈkuːlə]", topic: "cooling", example: "The central cooler uses sea water." },
  { word: "expansion tank", translation: "расширительный бак", transcription: "[ɪkˈspænʃən tæŋk]", topic: "cooling", example: "The expansion tank absorbs pressure changes." },
  { word: "coolant", translation: "охлаждающая жидкость", transcription: "[ˈkuːlənt]", topic: "cooling", example: "Check the coolant level every day." },
  { word: "radiator", translation: "радиатор", transcription: "[ˈreɪdieɪtə]", topic: "cooling", example: "The radiator cools the fresh water." },
  { word: "temperature", translation: "температура", transcription: "[ˈtemprɪtʃə]", topic: "cooling", example: "Monitor the temperature closely." },
  { word: "scavenge air cooler", translation: "воздухоохладитель продувки", transcription: "[ˈskævɪndʒ eə ˈkuːlə]", topic: "cooling", example: "The scavenge air cooler cools the intake air." },

  // ============ MAINTENANCE (ОБСЛУЖИВАНИЕ) — 15 слов ============
  { word: "maintenance", translation: "техобслуживание", transcription: "[ˈmeɪntənəns]", topic: "maintenance", example: "Regular maintenance prevents breakdowns." },
  { word: "overhaul", translation: "капитальный ремонт", transcription: "[ˈəʊvəhɔːl]", topic: "maintenance", example: "The main engine needs an overhaul." },
  { word: "inspection", translation: "осмотр", transcription: "[ɪnˈspekʃən]", topic: "maintenance", example: "The inspection revealed a crack." },
  { word: "to dismantle", translation: "разбирать", transcription: "[dɪsˈmæntl]", topic: "maintenance", example: "Dismantle the pump to check the impeller." },
  { word: "to assemble", translation: "собирать", transcription: "[əˈsembl]", topic: "maintenance", example: "Assemble the engine after repair." },
  { word: "to tighten", translation: "затягивать", transcription: "[ˈtaɪtn]", topic: "maintenance", example: "Tighten all bolts to the correct torque." },
  { word: "to lubricate", translation: "смазывать", transcription: "[ˈluːbrɪkeɪt]", topic: "maintenance", example: "Lubricate all moving parts." },
  { word: "to replace", translation: "заменять", transcription: "[rɪˈpleɪs]", topic: "maintenance", example: "Replace the worn piston rings." },
  { word: "spare parts", translation: "запасные части", transcription: "[speə pɑːts]", topic: "maintenance", example: "Always keep spare parts onboard." },
  { word: "clearance", translation: "зазор", transcription: "[ˈklɪərəns]", topic: "maintenance", example: "Check the clearance between piston and liner." },
  { word: "torque", translation: "крутящий момент", transcription: "[tɔːk]", topic: "maintenance", example: "Apply the correct torque to the bolts." },
  { word: "torque wrench", translation: "динамометрический ключ", transcription: "[tɔːk rentʃ]", topic: "maintenance", example: "Use a torque wrench for cylinder head bolts." },
  { word: "gasket", translation: "прокладка", transcription: "[ˈɡæskɪt]", topic: "maintenance", example: "Replace the gasket during reassembly." },
  { word: "seal", translation: "уплотнение", transcription: "[siːl]", topic: "maintenance", example: "The seal prevents oil leaks." },
  { word: "to weld", translation: "сваривать", transcription: "[weld]", topic: "maintenance", example: "Weld the crack in the pipe." },

  // ============ TROUBLESHOOTING (НЕИСПРАВНОСТИ) — 15 слов ============
  { word: "troubleshooting", translation: "поиск неисправностей", transcription: "[ˈtrʌblʃuːtɪŋ]", topic: "troubleshooting", example: "Troubleshooting helps to find the fault." },
  { word: "fault", translation: "неисправность", transcription: "[fɔːlt]", topic: "troubleshooting", example: "There is a fault in the fuel system." },
  { word: "leakage", translation: "утечка", transcription: "[ˈliːkɪdʒ]", topic: "troubleshooting", example: "A leakage was found in the pipe." },
  { word: "overheating", translation: "перегрев", transcription: "[ˌəʊvəˈhiːtɪŋ]", topic: "troubleshooting", example: "Overheating can damage the bearings." },
  { word: "vibration", translation: "вибрация", transcription: "[vaɪˈbreɪʃən]", topic: "troubleshooting", example: "Excessive vibration indicates a problem." },
  { word: "wear", translation: "износ", transcription: "[weə]", topic: "troubleshooting", example: "Cylinder wear is measured regularly." },
  { word: "crack", translation: "трещина", transcription: "[kræk]", topic: "troubleshooting", example: "A crack was found in the cylinder head." },
  { word: "corrosion", translation: "коррозия", transcription: "[kəˈrəʊʒən]", topic: "troubleshooting", example: "Corrosion damages the cooling system." },
  { word: "to repair", translation: "ремонтировать", transcription: "[rɪˈpeə]", topic: "troubleshooting", example: "Repair the leaking valve immediately." },
  { word: "to adjust", translation: "регулировать", transcription: "[əˈdʒʌst]", topic: "troubleshooting", example: "Adjust the valve clearance." },
  { word: "breakdown", translation: "поломка", transcription: "[ˈbreɪkdaʊn]", topic: "troubleshooting", example: "A breakdown stopped the engine." },
  { word: "malfunction", translation: "неисправная работа", transcription: "[mælˈfʌŋkʃən]", topic: "troubleshooting", example: "A malfunction in the alarm system." },
  { word: "to fail", translation: "выходить из строя", transcription: "[tə feɪl]", topic: "troubleshooting", example: "The pump failed during the night." },
  { word: "smoke", translation: "дым", transcription: "[sməʊk]", topic: "troubleshooting", example: "Black smoke means incomplete combustion." },
  { word: "noise", translation: "шум", transcription: "[nɔɪz]", topic: "troubleshooting", example: "Unusual noise indicates a problem." },

  // ============ BUNKERING (БУНКЕРОВКА) — 12 слов ============
  { word: "bunkering", translation: "бункеровка", transcription: "[ˈbʌŋkərɪŋ]", topic: "bunkering", example: "Bunkering takes several hours." },
  { word: "Bunker Delivery Note", translation: "бункерная накладная", transcription: "[ˈbʌŋkə dɪˈlɪvəri nəʊt]", topic: "bunkering", example: "The Bunker Delivery Note must be signed." },
  { word: "sulphur content", translation: "содержание серы", transcription: "[ˈsʌlfə ˈkɒntent]", topic: "bunkering", example: "Sulphur content must be below 0.5%." },
  { word: "flash point", translation: "температура вспышки", transcription: "[flæʃ pɔɪnt]", topic: "bunkering", example: "Check the flash point of the fuel." },
  { word: "sample", translation: "проба", transcription: "[ˈsɑːmpl]", topic: "bunkering", example: "Take a fuel sample during bunkering." },
  { word: "driptray", translation: "поддон для капель", transcription: "[ˈdrɪptreɪ]", topic: "bunkering", example: "Place a driptray under the flange." },
  { word: "overflow", translation: "перелив", transcription: "[ˈəʊvəfləʊ]", topic: "bunkering", example: "Watch for tank overflow during bunkering." },
  { word: "manifold", translation: "манифольд", transcription: "[ˈmænɪfəʊld]", topic: "bunkering", example: "Connect the hose to the manifold." },
  { word: "hose", translation: "шланг", transcription: "[həʊz]", topic: "bunkering", example: "Inspect the hose before bunkering." },
  { word: "flange", translation: "фланец", transcription: "[flændʒ]", topic: "bunkering", example: "Tighten the flange bolts." },
  { word: "scupper", translation: "шпигат", transcription: "[ˈskʌpə]", topic: "bunkering", example: "Plug the scuppers before bunkering." },
  { word: "spill", translation: "разлив", transcription: "[spɪl]", topic: "bunkering", example: "Prevent oil spills during bunkering." },

  // ============ CONVENTIONS (КОНВЕНЦИИ) — 10 слов ============
  { word: "SOLAS", translation: "Конвенция по безопасности жизни на море", transcription: "[ˈsəʊlæs]", topic: "conventions", example: "SOLAS sets minimum safety standards." },
  { word: "MARPOL", translation: "Конвенция по предотвращению загрязнения", transcription: "[ˈmɑːpɒl]", topic: "conventions", example: "MARPOL prevents pollution from ships." },
  { word: "ISM Code", translation: "Кодекс ISM", transcription: "[aɪ es em kəʊd]", topic: "conventions", example: "The ISM Code ensures safe management." },
  { word: "STCW", translation: "Конвенция о подготовке моряков", transcription: "[es tiː siː ˈdʌbljuː]", topic: "conventions", example: "STCW sets training standards for seafarers." },
  { word: "IMO", translation: "Международная морская организация", transcription: "[aɪ em əʊ]", topic: "conventions", example: "IMO is a UN agency for shipping." },
  { word: "Safety Management System", translation: "Система управления безопасностью", transcription: "[ˈseɪfti ˈmænɪdʒmənt ˈsɪstəm]", topic: "conventions", example: "Every ship must have a Safety Management System." },
  { word: "Oil Record Book", translation: "журнал нефтяных операций", transcription: "[ɔɪl ˈrekɔːd bʊk]", topic: "conventions", example: "Record all oil operations in the Oil Record Book." },
  { word: "Port State Control", translation: "портовый государственный контроль", transcription: "[pɔːt steɪt kənˈtrəʊl]", topic: "conventions", example: "Port State Control inspects foreign ships." },
  { word: "certificate", translation: "сертификат", transcription: "[səˈtɪfɪkɪt]", topic: "conventions", example: "All officers must have valid certificates." },
  { word: "inspection", translation: "инспекция", transcription: "[ɪnˈspekʃən]", topic: "conventions", example: "The inspection was carried out by PSC." },

  // ============ REPAIR VERBS (ГЛАГОЛЫ РЕМОНТА) — 20 слов ============
  { word: "to repair", translation: "ремонтировать", transcription: "[rɪˈpeə]", topic: "repair", example: "Repair the pump as soon as possible." },
  { word: "to fix", translation: "чинить", transcription: "[fɪks]", topic: "repair", example: "Fix the leaking pipe." },
  { word: "to dismantle", translation: "разбирать", transcription: "[dɪsˈmæntl]", topic: "repair", example: "Dismantle the engine for inspection." },
  { word: "to assemble", translation: "собирать", transcription: "[əˈsembl]", topic: "repair", example: "Assemble the pump after repair." },
  { word: "to disassemble", translation: "разбирать", transcription: "[ˌdɪsəˈsembl]", topic: "repair", example: "Disassemble the unit carefully." },
  { word: "to clean", translation: "чистить", transcription: "[kliːn]", topic: "repair", example: "Clean the filter every week." },
  { word: "to grind", translation: "шлифовать", transcription: "[ɡraɪnd]", topic: "repair", example: "Grind the valve seat to remove pits." },
  { word: "to weld", translation: "сваривать", transcription: "[weld]", topic: "repair", example: "Weld the crack in the frame." },
  { word: "to cut", translation: "резать", transcription: "[kʌt]", topic: "repair", example: "Cut the pipe to the correct length." },
  { word: "to lubricate", translation: "смазывать", transcription: "[ˈluːbrɪkeɪt]", topic: "repair", example: "Lubricate the bearings before assembly." },
  { word: "to measure", translation: "измерять", transcription: "[ˈmeʒə]", topic: "repair", example: "Measure the clearance precisely." },
  { word: "to inspect", translation: "осматривать", transcription: "[ɪnˈspekt]", topic: "repair", example: "Inspect the valves for wear." },
  { word: "to replace", translation: "заменять", transcription: "[rɪˈpleɪs]", topic: "repair", example: "Replace the damaged gasket." },
  { word: "to tighten", translation: "затягивать", transcription: "[ˈtaɪtn]", topic: "repair", example: "Tighten all bolts to the correct torque." },
  { word: "to loosen", translation: "ослаблять", transcription: "[ˈluːsn]", topic: "repair", example: "Loosen the bolts before removing the cover." },
  { word: "to lift", translation: "поднимать", transcription: "[lɪft]", topic: "repair", example: "Lift the piston with the crane." },
  { word: "to lower", translation: "опускать", transcription: "[ˈləʊə]", topic: "repair", example: "Lower the piston into the cylinder." },
  { word: "to check", translation: "проверять", transcription: "[tʃek]", topic: "repair", example: "Check the oil level daily." },
  { word: "to test", translation: "испытывать", transcription: "[test]", topic: "repair", example: "Test the safety valve after repair." },
  { word: "to adjust", translation: "регулировать", transcription: "[əˈdʒʌst]", topic: "repair", example: "Adjust the valve clearance." },

  // ============ TOOLS (ИНСТРУМЕНТЫ) — 15 слов ============
  { word: "hammer", translation: "молоток", transcription: "[ˈhæmə]", topic: "tools", example: "Use a hammer to tap the pin." },
  { word: "screwdriver", translation: "отвёртка", transcription: "[ˈskruːdraɪvə]", topic: "tools", example: "Pass me a screwdriver, please." },
  { word: "wrench", translation: "гаечный ключ", transcription: "[rentʃ]", topic: "tools", example: "Use the correct wrench for the nut." },
  { word: "adjustable wrench", translation: "разводной ключ", transcription: "[əˈdʒʌstəbl rentʃ]", topic: "tools", example: "Use an adjustable wrench for different sizes." },
  { word: "pliers", translation: "плоскогубцы", transcription: "[ˈplaɪəz]", topic: "tools", example: "Use pliers to grip the wire." },
  { word: "file", translation: "напильник", transcription: "[faɪl]", topic: "tools", example: "Use a file to smooth the surface." },
  { word: "drill", translation: "дрель", transcription: "[drɪl]", topic: "tools", example: "Drill a hole in the metal plate." },
  { word: "grinder", translation: "болгарка", transcription: "[ˈɡraɪndə]", topic: "tools", example: "Use the grinder to cut the pipe." },
  { word: "saw", translation: "пила", transcription: "[sɔː]", topic: "tools", example: "Cut the wood with a saw." },
  { word: "chisel", translation: "зубило", transcription: "[ˈtʃɪzl]", topic: "tools", example: "Use a chisel to remove rust." },
  { word: "scraper", translation: "скребок", transcription: "[ˈskreɪpə]", topic: "tools", example: "Clean the deck with a scraper." },
  { word: "brush", translation: "кисть", transcription: "[brʌʃ]", topic: "tools", example: "Paint with a brush." },
  { word: "roller", translation: "валик", transcription: "[ˈrəʊlə]", topic: "tools", example: "Use a roller for large surfaces." },
  { word: "spanner", translation: "ключ", transcription: "[ˈspænə]", topic: "tools", example: "Use a spanner for the nuts." },
  { word: "torque wrench", translation: "динамометрический ключ", transcription: "[tɔːk rentʃ]", topic: "tools", example: "Use a torque wrench for critical bolts." }
];// =====================================================
// ЧАСТЬ 2: Дополнительные слова (продолжение)
// =====================================================

// Добавляем в тот же массив WORDS (см. вставку ниже)
WORDS.push(
  // ============ ENGINE SYSTEMS (СИСТЕМЫ ДВИГАТЕЛЯ) — 20 слов ============
  { word: "fuel system", translation: "топливная система", transcription: "[ˈfjuːəl ˈsɪstəm]", topic: "fuel", example: "The fuel system supplies oil to the engine." },
  { word: "lubricating system", translation: "система смазки", transcription: "[ˈluːbrɪkeɪtɪŋ ˈsɪstəm]", topic: "lube", example: "The lubricating system reduces friction." },
  { word: "cooling system", translation: "система охлаждения", transcription: "[ˈkuːlɪŋ ˈsɪstəm]", topic: "cooling", example: "The cooling system keeps the engine cool." },
  { word: "starting air system", translation: "система пускового воздуха", transcription: "[ˈstɑːtɪŋ eə ˈsɪstəm]", topic: "engine", example: "The starting air system rotates the engine." },
  { word: "control air system", translation: "система импульсного воздуха", transcription: "[kənˈtrəʊl eə ˈsɪstəm]", topic: "engine", example: "The control air system operates the valves." },
  { word: "scavenge system", translation: "система продувки", transcription: "[ˈskævɪndʒ ˈsɪstəm]", topic: "engine", example: "The scavenge system removes exhaust gases." },
  { word: "exhaust gas system", translation: "система выхлопных газов", transcription: "[ɪɡˈzɔːst ɡæs ˈsɪstəm]", topic: "engine", example: "The exhaust gas system leads gases to the funnel." },
  { word: "manoeuvring system", translation: "система маневрирования", transcription: "[məˈnuːvrɪŋ ˈsɪstəm]", topic: "engine", example: "The manoeuvring system controls the engine from the bridge." },
  { word: "steam system", translation: "паровая система", transcription: "[stiːm ˈsɪstəm]", topic: "engine", example: "The steam system supplies steam for heating." },
  { word: "bilge system", translation: "осушительная система", transcription: "[bɪldʒ ˈsɪstəm]", topic: "engine", example: "The bilge system removes water from the engine room." },
  { word: "ballast system", translation: "балластная система", transcription: "[ˈbæləst ˈsɪstəm]", topic: "engine", example: "The ballast system adjusts ship stability." },
  { word: "fire main", translation: "пожарная магистраль", transcription: "[ˈfaɪə meɪn]", topic: "safety", example: "The fire main supplies water to hydrants." },
  { word: "starting air", translation: "пусковой воздух", transcription: "[ˈstɑːtɪŋ eə]", topic: "engine", example: "Starting air rotates the engine at start." },
  { word: "compressed air", translation: "сжатый воздух", transcription: "[kəmˈprest eə]", topic: "engine", example: "Compressed air is stored in receivers." },
  { word: "air receiver", translation: "воздухосборник", transcription: "[eə rɪˈsiːvə]", topic: "engine", example: "The air receiver stores compressed air." },
  { word: "air compressor", translation: "воздушный компрессор", transcription: "[eə kəmˈpresə]", topic: "engine", example: "The air compressor fills the starting air bottles." },
  { word: "scavenge air", translation: "продувочный воздух", transcription: "[ˈskævɪndʒ eə]", topic: "engine", example: "Scavenge air enters through the ports." },
  { word: "exhaust gas", translation: "выхлопной газ", transcription: "[ɪɡˈzɔːst ɡæs]", topic: "engine", example: "Exhaust gas leaves through the funnel." },
  { word: "exhaust valve spindle", translation: "шток выпускного клапана", transcription: "[ɪɡˈzɔːst vælv ˈspɪndl]", topic: "engine", example: "The exhaust valve spindle must be lubricated." },
  { word: "manifold", translation: "коллектор", transcription: "[ˈmænɪfəʊld]", topic: "engine", example: "The exhaust manifold collects gases." },

  // ============ 4-STROKE DETAILS — 10 слов ============
  { word: "intake valve", translation: "впускной клапан", transcription: "[ˈɪnteɪk vælv]", topic: "engine", example: "The intake valve opens during the intake stroke." },
  { word: "compression stroke", translation: "такт сжатия", transcription: "[kəmˈpreʃən strəʊk]", topic: "engine", example: "Air is compressed during the compression stroke." },
  { word: "power stroke", translation: "рабочий такт", transcription: "[ˈpaʊə strəʊk]", topic: "engine", example: "The power stroke produces energy." },
  { word: "exhaust stroke", translation: "такт выпуска", transcription: "[ɪɡˈzɔːst strəʊk]", topic: "engine", example: "The exhaust stroke releases burnt gases." },
  { word: "ignition", translation: "воспламенение", transcription: "[ɪɡˈnɪʃən]", topic: "engine", example: "Ignition occurs when fuel meets hot air." },
  { word: "fuel injection", translation: "впрыск топлива", transcription: "[ˈfjuːəl ɪnˈdʒekʃən]", topic: "engine", example: "Fuel injection is controlled electronically." },
  { word: "TDC (top dead centre)", translation: "верхняя мёртвая точка", transcription: "[tiː diː siː]", topic: "engine", example: "The piston reaches TDC at the top of its stroke." },
  { word: "BDC (bottom dead centre)", translation: "нижняя мёртвая точка", transcription: "[biː diː siː]", topic: "engine", example: "At BDC the piston is at its lowest point." },
  { word: "clearance volume", translation: "объём камеры сгорания", transcription: "[ˈklɪərəns ˈvɒljuːm]", topic: "engine", example: "The clearance volume affects compression ratio." },
  { word: "compression ratio", translation: "степень сжатия", transcription: "[kəmˈpreʃən ˈreɪʃiəʊ]", topic: "engine", example: "High compression ratio improves efficiency." },

  // ============ 2-STROKE DETAILS — 8 слов ============
  { word: "scavenge port", translation: "продувочное окно", transcription: "[ˈskævɪndʒ pɔːt]", topic: "engine", example: "Air enters through the scavenge ports." },
  { word: "uniflow scavenging", translation: "прямоточная продувка", transcription: "[ˈjuːnɪfləʊ ˈskævɪndʒɪŋ]", topic: "engine", example: "Uniflow scavenging is efficient in large engines." },
  { word: "cross scavenging", translation: "петлевая продувка", transcription: "[krɒs ˈskævɪndʒɪŋ]", topic: "engine", example: "Cross scavenging is used in small engines." },
  { word: "loop scavenging", translation: "контурная продувка", transcription: "[luːp ˈskævɪndʒɪŋ]", topic: "engine", example: "Loop scavenging is a common method." },
  { word: "air box", translation: "воздушный ресивер", transcription: "[eə bɒks]", topic: "engine", example: "The air box stores scavenging air." },
  { word: "auxiliary blower", translation: "вспомогательный вентилятор", transcription: "[ɔːɡˈzɪljəri ˈbləʊə]", topic: "engine", example: "The auxiliary blower starts at low load." },
  { word: "transfer port", translation: "перепускное окно", transcription: "[ˈtrænsfə pɔːt]", topic: "engine", example: "Air-fuel mixture passes through transfer ports." },
  { word: "piston crown", translation: "головка поршня", transcription: "[ˈpɪstən kraʊn]", topic: "engine", example: "The piston crown is exposed to high temperature." },

  // ============ STEAM SYSTEM — 10 слов ============
  { word: "boiler", translation: "котёл", transcription: "[ˈbɔɪlə]", topic: "steam", example: "The boiler produces steam." },
  { word: "auxiliary boiler", translation: "вспомогательный котёл", transcription: "[ɔːɡˈzɪljəri ˈbɔɪlə]", topic: "steam", example: "The auxiliary boiler supplies steam in port." },
  { word: "water-tube boiler", translation: "водотрубный котёл", transcription: "[ˈwɔːtə tjuːb ˈbɔɪlə]", topic: "steam", example: "Water-tube boilers are used on large ships." },
  { word: "fire-tube boiler", translation: "огнетрубный котёл", transcription: "[ˈfaɪə tjuːb ˈbɔɪlə]", topic: "steam", example: "The fire-tube boiler is common for auxiliary use." },
  { word: "steam drum", translation: "паровой барабан", transcription: "[stiːm drʌm]", topic: "steam", example: "Steam collects in the steam drum." },
  { word: "superheated steam", translation: "перегретый пар", transcription: "[ˌsuːpəˈhiːtɪd stiːm]", topic: "steam", example: "Superheated steam is dry and very hot." },
  { word: "saturated steam", translation: "насыщенный пар", transcription: "[ˈsætʃəreɪtɪd stiːm]", topic: "steam", example: "Saturated steam contains water particles." },
  { word: "feed water", translation: "питательная вода", transcription: "[fiːd ˈwɔːtə]", topic: "steam", example: "Feed water is added to the boiler." },
  { word: "burner", translation: "горелка", transcription: "[ˈbɜːnə]", topic: "steam", example: "The burner ignites the fuel in the boiler." },
  { word: "soot blowing", translation: "обдувка сажи", transcription: "[sʊt ˈbləʊɪŋ]", topic: "steam", example: "Soot blowing cleans the boiler tubes." },

  // ============ REFRIGERATION — 8 слов ============
  { word: "refrigeration plant", translation: "холодильная установка", transcription: "[rɪˌfrɪdʒəˈreɪʃən plɑːnt]", topic: "refrigeration", example: "The refrigeration plant keeps cargo cold." },
  { word: "compressor", translation: "компрессор", transcription: "[kəmˈpresə]", topic: "refrigeration", example: "The compressor circulates the refrigerant." },
  { word: "condenser", translation: "конденсатор", transcription: "[kənˈdensə]", topic: "refrigeration", example: "The condenser releases heat." },
  { word: "evaporator", translation: "испаритель", transcription: "[ɪˈvæpəreɪtə]", topic: "refrigeration", example: "The evaporator absorbs heat." },
  { word: "expansion valve", translation: "расширительный клапан", transcription: "[ɪkˈspænʃən vælv]", topic: "refrigeration", example: "The expansion valve controls refrigerant flow." },
  { word: "refrigerant", translation: "хладагент", transcription: "[rɪˈfrɪdʒərənt]", topic: "refrigeration", example: "R-134a is a common refrigerant." },
  { word: "air conditioner", translation: "кондиционер", transcription: "[eə kənˈdɪʃənə]", topic: "refrigeration", example: "The air conditioner cools the accommodation." },
  { word: "provision room", translation: "кладовая провизии", transcription: "[prəˈvɪʒən ruːm]", topic: "refrigeration", example: "The provision room is kept cold." },

  // ============ ELECTRICAL — 15 слов ============
  { word: "diesel generator", translation: "дизель-генератор", transcription: "[ˈdiːzəl ˈdʒenəreɪtə]", topic: "electrical", example: "The diesel generator supplies electricity." },
  { word: "alternator", translation: "генератор переменного тока", transcription: "[ˈɔːltəneɪtə]", topic: "electrical", example: "The alternator produces AC power." },
  { word: "switchboard", translation: "распределительный щит", transcription: "[ˈswɪtʃbɔːd]", topic: "electrical", example: "The switchboard controls power distribution." },
  { word: "circuit breaker", translation: "автоматический выключатель", transcription: "[ˈsɜːkɪt ˈbreɪkə]", topic: "electrical", example: "The circuit breaker protects the circuit." },
  { word: "fuse", translation: "предохранитель", transcription: "[fjuːz]", topic: "electrical", example: "The fuse blew during overload." },
  { word: "voltage", translation: "напряжение", transcription: "[ˈvəʊltɪdʒ]", topic: "electrical", example: "Voltage is measured in volts." },
  { word: "current", translation: "ток", transcription: "[ˈkʌrənt]", topic: "electrical", example: "Current flows through the wire." },
  { word: "resistance", translation: "сопротивление", transcription: "[rɪˈzɪstəns]", topic: "electrical", example: "Resistance is measured in ohms." },
  { word: "insulation", translation: "изоляция", transcription: "[ˌɪnsjʊˈleɪʃən]", topic: "electrical", example: "Insulation protects the wires." },
  { word: "cable", translation: "кабель", transcription: "[ˈkeɪbl]", topic: "electrical", example: "The cable connects the motor." },
  { word: "motor", translation: "электродвигатель", transcription: "[ˈməʊtə]", topic: "electrical", example: "The motor drives the pump." },
  { word: "emergency generator", translation: "аварийный генератор", transcription: "[ɪˈmɜːdʒənsi ˈdʒenəreɪtə]", topic: "electrical", example: "The emergency generator starts automatically." },
  { word: "battery", translation: "аккумулятор", transcription: "[ˈbætəri]", topic: "electrical", example: "The battery provides backup power." },
  { word: "electrical shock", translation: "поражение током", transcription: "[ɪˈlektrɪkəl ʃɒk]", topic: "electrical", example: "Electrical shock can be fatal." },
  { word: "ground", translation: "заземление", transcription: "[ɡraʊnd]", topic: "electrical", example: "The ground protects against electrical faults." },

  // ============ WEATHER & SEA — 10 слов ============
  { word: "storm", translation: "шторм", transcription: "[stɔːm]", topic: "weather", example: "We faced a heavy storm last night." },
  { word: "heavy sea", translation: "сильное волнение", transcription: "[ˈhevi siː]", topic: "weather", example: "Heavy sea caused rolling." },
  { word: "wind", translation: "ветер", transcription: "[wɪnd]", topic: "weather", example: "Strong wind slowed the ship." },
  { word: "fog", translation: "туман", transcription: "[fɒɡ]", topic: "weather", example: "In fog, sound the whistle every minute." },
  { word: "ice", translation: "лёд", transcription: "[aɪs]", topic: "weather", example: "Ice can damage the hull." },
  { word: "rough weather", translation: "штормовая погода", transcription: "[rʌf ˈweðə]", topic: "weather", example: "In rough weather, secure all loose items." },
  { word: "swell", translation: "зыбь", transcription: "[swel]", topic: "weather", example: "The swell made the crew seasick." },
  { word: "tide", translation: "прилив", transcription: "[taɪd]", topic: "weather", example: "The tide changes twice a day." },
  { word: "current", translation: "течение", transcription: "[ˈkʌrənt]", topic: "weather", example: "The current pushed us off course." },
  { word: "visibility", translation: "видимость", transcription: "[ˌvɪzəˈbɪləti]", topic: "weather", example: "Visibility was reduced to 100 metres." },

  // ============ NAVIGATION — 10 слов ============
  { word: "compass", translation: "компас", transcription: "[ˈkʌmpəs]", topic: "navigation", example: "The compass shows the heading." },
  { word: "GPS", translation: "GPS", transcription: "[dʒiː piː es]", topic: "navigation", example: "GPS gives accurate position." },
  { word: "chart", translation: "карта", transcription: "[tʃɑːt]", topic: "navigation", example: "The chart shows depths and hazards." },
  { word: "course", translation: "курс", transcription: "[kɔːs]", topic: "navigation", example: "The course is 180 degrees." },
  { word: "bearing", translation: "пеленг", transcription: "[ˈbeərɪŋ]", topic: "navigation", example: "Take a bearing to the lighthouse." },
  { word: "position", translation: "позиция", transcription: "[pəˈzɪʃən]", topic: "navigation", example: "Our position is 45°N 30°W." },
  { word: "heading", translation: "направление", transcription: "[ˈhedɪŋ]", topic: "navigation", example: "Change heading to 270." },
  { word: "waypoint", translation: "путевая точка", transcription: "[ˈweɪpɔɪnt]", topic: "navigation", example: "The next waypoint is 20 miles away." },
  { word: "log", translation: "лаг", transcription: "[lɒɡ]", topic: "navigation", example: "The log measures speed through water." },
  { word: "echo sounder", translation: "эхолот", transcription: "[ˈekəʊ ˈsaʊndə]", topic: "navigation", example: "The echo sounder measures depth." },

  // ============ COMMUNICATION — 10 слов ============
  { word: "VHF radio", translation: "УКВ радиостанция", transcription: "[viː eɪtʃ ef ˈreɪdiəʊ]", topic: "communication", example: "Use VHF radio for short-range communication." },
  { word: "walkie-talkie", translation: "рация", transcription: "[ˈwɔːki ˈtɔːki]", topic: "communication", example: "Take a walkie-talkie with you." },
  { word: "bridge", translation: "мостик", transcription: "[brɪdʒ]", topic: "communication", example: "Call the bridge immediately." },
  { word: "engine control room", translation: "ЦПУ", transcription: "[ˈendʒɪn kənˈtrəʊl ruːm]", topic: "communication", example: "The engineer is in the engine control room." },
  { word: "intercom", translation: "внутренняя связь", transcription: "[ˈɪntəkɒm]", topic: "communication", example: "Use the intercom to talk to the bridge." },
  { word: "signal", translation: "сигнал", transcription: "[ˈsɪɡnəl]", topic: "communication", example: "Send a distress signal." },
  { word: "message", translation: "сообщение", transcription: "[ˈmesɪdʒ]", topic: "communication", example: "I received your message." },
  { word: "distress signal", translation: "сигнал бедствия", transcription: "[dɪˈstres ˈsɪɡnəl]", topic: "communication", example: "Send a distress signal on Channel 16." },
  { word: "mayday", translation: "мэйдэй (сигнал бедствия)", transcription: "[ˈmeɪdeɪ]", topic: "communication", example: "Mayday, mayday, this is MV Neptune." },
  { word: "radio silence", translation: "радиомолчание", transcription: "[ˈreɪdiəʊ ˈsaɪləns]", topic: "communication", example: "Maintain radio silence during emergency." },

  // ============ PAPERWORK — 10 слов ============
  { word: "logbook", translation: "вахтенный журнал", transcription: "[ˈlɒɡbʊk]", topic: "paperwork", example: "Record all events in the logbook." },
  { word: "oil record book", translation: "журнал нефтяных операций", transcription: "[ɔɪl ˈrekɔːd bʊk]", topic: "paperwork", example: "Fill in the oil record book daily." },
  { word: "report", translation: "отчёт", transcription: "[rɪˈpɔːt]", topic: "paperwork", example: "Submit your report to the Chief Engineer." },
  { word: "checklist", translation: "контрольный список", transcription: "[ˈtʃeklɪst]", topic: "paperwork", example: "Use the checklist before starting." },
  { word: "manual", translation: "руководство", transcription: "[ˈmænjuəl]", topic: "paperwork", example: "Read the manual before repair." },
  { word: "certificate", translation: "сертификат", transcription: "[səˈtɪfɪkɪt]", topic: "paperwork", example: "The certificate expires next year." },
  { word: "inspection report", translation: "акт осмотра", transcription: "[ɪnˈspekʃən rɪˈpɔːt]", topic: "paperwork", example: "The inspection report is ready." },
  { word: "permit", translation: "разрешение", transcription: "[ˈpɜːmɪt]", topic: "paperwork", example: "Get a hot work permit first." },
  { word: "hot work permit", translation: "разрешение на огневые работы", transcription: "[hɒt wɜːk ˈpɜːmɪt]", topic: "paperwork", example: "Hot work permit is required for welding." },
  { word: "enclosed space entry permit", translation: "разрешение на вход в замкнутое пространство", transcription: "[ɪnˈkləʊzd speɪs ˈentri ˈpɜːmɪt]", topic: "paperwork", example: "Get a permit before entering a tank." },

  // ============ EMERGENCY — 10 слов ============
  { word: "abandon ship", translation: "оставить судно", transcription: "[əˈbændən ʃɪp]", topic: "emergency", example: "The captain ordered to abandon ship." },
  { word: "collision", translation: "столкновение", transcription: "[kəˈlɪʒən]", topic: "emergency", example: "A collision with another vessel caused damage." },
  { word: "grounding", translation: "посадка на мель", transcription: "[ˈɡraʊndɪŋ]", topic: "emergency", example: "Grounding can damage the hull." },
  { word: "fire", translation: "пожар", transcription: "[ˈfaɪə]", topic: "emergency", example: "The fire started in the engine room." },
  { word: "flooding", translation: "затопление", transcription: "[ˈflʌdɪŋ]", topic: "emergency", example: "Flooding occurred in the hold." },
  { word: "evacuation", translation: "эвакуация", transcription: "[ɪˌvækjuˈeɪʃən]", topic: "emergency", example: "Evacuation was carried out quickly." },
  { word: "rescue", translation: "спасение", transcription: "[ˈreskjuː]", topic: "emergency", example: "The rescue operation was successful." },
  { word: "survivor", translation: "выживший", transcription: "[səˈvaɪvə]", topic: "emergency", example: "All survivors were rescued." },
  { word: "casualty", translation: "пострадавший", transcription: "[ˈkæʒuəlti]", topic: "emergency", example: "There were no casualties." },
  { word: "damage control", translation: "борьба за живучесть", transcription: "[ˈdæmɪdʒ kənˈtrəʊl]", topic: "emergency", example: "Damage control team responded immediately." },

  // ============ MISCELLANEOUS — 15 слов ============
  { word: "hull", translation: "корпус судна", transcription: "[hʌl]", topic: "vessel", example: "The hull was inspected in dry dock." },
  { word: "bulkhead", translation: "переборка", transcription: "[ˈbʌlkhed]", topic: "vessel", example: "The bulkhead separates the compartments." },
  { word: "hatch", translation: "люк", transcription: "[hætʃ]", topic: "vessel", example: "Close the hatch before sailing." },
  { word: "hatch cover", translation: "крышка люка", transcription: "[hætʃ ˈkʌvə]", topic: "vessel", example: "The hatch cover must be watertight." },
  { word: "watertight door", translation: "водонепроницаемая дверь", transcription: "[ˈwɔːtətaɪt dɔː]", topic: "vessel", example: "Close all watertight doors." },
  { word: "porthole", translation: "иллюминатор", transcription: "[ˈpɔːthəʊl]", topic: "vessel", example: "The porthole lets in light." },
  { word: "mooring", translation: "швартовка", transcription: "[ˈmʊərɪŋ]", topic: "vessel", example: "Mooring takes place at the berth." },
  { word: "anchor chain", translation: "якорная цепь", transcription: "[ˈæŋkə tʃeɪn]", topic: "vessel", example: "The anchor chain was inspected." },
  { word: "capstan", translation: "шпиль", transcription: "[ˈkæpstən]", topic: "vessel", example: "The capstan is used for mooring ropes." },
  { word: "windlass", translation: "брашпиль", transcription: "[ˈwɪndləs]", topic: "vessel", example: "The windlass lifts the anchor." },
  { word: "derrick", translation: "стрела", transcription: "[ˈderɪk]", topic: "vessel", example: "The derrick is used for cargo operations." },
  { word: "crane", translation: "кран", transcription: "[kreɪn]", topic: "vessel", example: "The deck crane lifts cargo." },
  { word: "davits", translation: "шлюпбалки", transcription: "[ˈdævɪts]", topic: "vessel", example: "The davits support the lifeboat." },
  { word: "funnel", translation: "дымовая труба", transcription: "[ˈfʌnəl]", topic: "vessel", example: "The funnel emits exhaust gases." },
  { word: "draft", translation: "осадка", transcription: "[drɑːft]", topic: "vessel", example: "The draft is 12 metres." }
);

// =====================================================
// ПРЕДЛОЖЕНИЯ (для упражнений)
// =====================================================
const SENTENCES = [
  // CREW
  { sentence: "The _____ is responsible for all ship's machinery.", missing: "chief engineer", translation: "Старший механик отвечает за всё судовое оборудование.", topic: "crew", options: ["chief engineer", "captain", "motorman", "cook"] },
  { sentence: "The engine department operates, maintains, and _____ the machinery.", missing: "repairs", translation: "Машинное отделение эксплуатирует, обслуживает и ремонтирует оборудование.", topic: "crew", options: ["repairs", "paints", "sells", "hides"] },
  { sentence: "The Second Engineer is next in rank to the _____ Engineer.", missing: "Chief", translation: "Второй механик следующий по званию после старшего механика.", topic: "crew", options: ["Chief", "Third", "Fourth", "Junior"] },
  { sentence: "The Third Engineer is in charge of _____ operation.", missing: "bunkering", translation: "Третий механик отвечает за бункеровку.", topic: "crew", options: ["bunkering", "painting", "cooking", "cleaning"] },
  { sentence: "Each motorman must follow the engineer's _____.", missing: "instructions", translation: "Каждый моторист должен соблюдать указания механика.", topic: "crew", options: ["instructions", "mistakes", "problems", "decisions"] },

  // ENGINE
  { sentence: "The fuel oil is _____ into the cylinder by the injection valve.", missing: "injected", translation: "Топливо впрыскивается в цилиндр через форсунку.", topic: "engine", options: ["injected", "exhausted", "cooled", "cleaned"] },
  { sentence: "The _____ stroke supplies air into the cylinder.", missing: "intake", translation: "Такт впуска подаёт воздух в цилиндр.", topic: "engine", options: ["intake", "compression", "power", "exhaust"] },
  { sentence: "The exhaust valve opens during the _____ stroke.", missing: "exhaust", translation: "Выпускной клапан открывается во время такта выпуска.", topic: "engine", options: ["exhaust", "intake", "compression", "power"] },
  { sentence: "The crankshaft converts linear motion into _____ motion.", missing: "rotational", translation: "Коленчатый вал преобразует линейное движение во вращательное.", topic: "engine", options: ["rotational", "linear", "vertical", "horizontal"] },
  { sentence: "The _____ increases the pressure of intake air.", missing: "turbocharger", translation: "Турбокомпрессор повышает давление впускного воздуха.", topic: "engine", options: ["turbocharger", "cooler", "filter", "pump"] },
  { sentence: "The piston moves up and down inside the _____.", missing: "cylinder", translation: "Поршень движется вверх и вниз внутри цилиндра.", topic: "engine", options: ["cylinder", "crankcase", "manifold", "receiver"] },
  { sentence: "The four-stroke cycle has intake, compression, power and _____ strokes.", missing: "exhaust", translation: "Четырёхтактный цикл включает такты впуска, сжатия, рабочего хода и выпуска.", topic: "engine", options: ["exhaust", "intake", "power", "scavenge"] },
  { sentence: "The connecting rod links the piston to the _____.", missing: "crankshaft", translation: "Шатун соединяет поршень с коленчатым валом.", topic: "engine", options: ["crankshaft", "cylinder", "camshaft", "flywheel"] },

  // FUEL
  { sentence: "The _____ removes water and dirt from the fuel.", missing: "separator", translation: "Сепаратор удаляет воду и грязь из топлива.", topic: "fuel", options: ["separator", "heater", "pump", "tank"] },
  { sentence: "The fuel is heated to reduce its _____.", missing: "viscosity", translation: "Топливо нагревается, чтобы снизить его вязкость.", topic: "fuel", options: ["viscosity", "temperature", "pressure", "volume"] },
  { sentence: "The fuel flows from the service tank to the _____.", missing: "engine", translation: "Топливо течёт из расходного бака в двигатель.", topic: "fuel", options: ["engine", "funnel", "deck", "cabin"] },
  { sentence: "_____ content in fuel must be below 0.5%.", missing: "Sulphur", translation: "Содержание серы в топливе должно быть ниже 0,5%.", topic: "fuel", options: ["Sulphur", "Water", "Carbon", "Oxygen"] },

  // LUBE
  { sentence: "The _____ cools the lubricating oil.", missing: "oil cooler", translation: "Маслоохладитель охлаждает смазочное масло.", topic: "lube", options: ["oil cooler", "oil pump", "oil filter", "sump"] },
  { sentence: "The oil filter removes _____ from the lubricating oil.", missing: "dirt", translation: "Масляный фильтр удаляет грязь из смазочного масла.", topic: "lube", options: ["dirt", "oil", "water", "steam"] },
  { sentence: "Cylinder oil is supplied by the cylinder _____.", missing: "lubricator", translation: "Цилиндровое масло подаётся цилиндровым лубрикатором.", topic: "lube", options: ["lubricator", "cooler", "filter", "pump"] },

  // COOLING
  { sentence: "Jacket water cools the cylinder _____ and covers.", missing: "liners", translation: "Вода рубашки охлаждает втулки и крышки цилиндров.", topic: "cooling", options: ["liners", "pistons", "valves", "bearings"] },
  { sentence: "The _____ valve controls the cooling water temperature.", missing: "thermostatic", translation: "Термостатический клапан регулирует температуру охлаждающей воды.", topic: "cooling", options: ["thermostatic", "safety", "relief", "non-return"] },
  { sentence: "Sea water is used in the _____ cooler.", missing: "central", translation: "Забортная вода используется в центральном охладителе.", topic: "cooling", options: ["central", "oil", "air", "fuel"] },

  // SAFETY
  { sentence: "If you find a fire, raise the _____ immediately.", missing: "alarm", translation: "Если вы обнаружили пожар, немедленно поднимите тревогу.", topic: "safety", options: ["alarm", "anchor", "sail", "flag"] },
  { sentence: "Put on your _____ before abandoning the ship.", missing: "life jacket", translation: "Наденьте спасательный жилет перед оставлением судна.", topic: "safety", options: ["life jacket", "helmet", "gloves", "coat"] },
  { sentence: "Go to your _____ station immediately.", missing: "muster", translation: "Немедленно идите к месту сбора.", topic: "safety", options: ["muster", "engine", "radio", "cabin"] },
  { sentence: "The fire _____ is used to extinguish small fires.", missing: "extinguisher", translation: "Огнетушитель используется для тушения небольших пожаров.", topic: "safety", options: ["extinguisher", "hose", "alarm", "drill"] },
  { sentence: "Never enter an enclosed space without a _____.", missing: "permit", translation: "Никогда не входите в замкнутое пространство без разрешения.", topic: "safety", options: ["permit", "helmet", "flashlight", "friend"] },
  { sentence: "A _____ drill is carried out every month.", missing: "fire", translation: "Учебная пожарная тревога проводится каждый месяц.", topic: "safety", options: ["fire", "cooking", "sleeping", "meeting"] },

  // MAINTENANCE
  { sentence: "The engine needs an _____ every 12000 hours.", missing: "overhaul", translation: "Двигатель нуждается в капитальном ремонте каждые 12000 часов.", topic: "maintenance", options: ["overhaul", "inspection", "painting", "cleaning"] },
  { sentence: "All bolts must be tightened to the correct _____.", missing: "torque", translation: "Все болты должны быть затянуты с правильным крутящим моментом.", topic: "maintenance", options: ["torque", "angle", "speed", "colour"] },
  { sentence: "Replace the _____ before reassembling the engine.", missing: "gasket", translation: "Замените прокладку перед сборкой двигателя.", topic: "maintenance", options: ["gasket", "piston", "shaft", "filter"] },
  { sentence: "The cylinder liner shows signs of _____.", missing: "wear", translation: "Втулка цилиндра показывает признаки износа.", topic: "maintenance", options: ["wear", "new", "clean", "cold"] },

  // TROUBLESHOOTING
  { sentence: "A _____ in the pipe caused a fuel leak.", missing: "crack", translation: "Трещина в трубе вызвала утечку топлива.", topic: "troubleshooting", options: ["crack", "hole", "weld", "joint"] },
  { sentence: "Excessive _____ may indicate a bearing problem.", missing: "vibration", translation: "Чрезмерная вибрация может указывать на проблему с подшипником.", topic: "troubleshooting", options: ["vibration", "noise", "heat", "smoke"] },
  { sentence: "Overheating can _____ the engine.", missing: "damage", translation: "Перегрев может повредить двигатель.", topic: "troubleshooting", options: ["damage", "cool", "fix", "help"] },
  { sentence: "Black smoke from the funnel indicates incomplete _____.", missing: "combustion", translation: "Чёрный дым из трубы указывает на неполное сгорание.", topic: "troubleshooting", options: ["combustion", "cooling", "lubrication", "operation"] },

  // BUNKERING
  { sentence: "The Chief Engineer must _____ all bunkering operations.", missing: "supervise", translation: "Старший механик должен контролировать все операции бункеровки.", topic: "bunkering", options: ["supervise", "ignore", "avoid", "delay"] },
  { sentence: "Place a _____ under the flange before bunkering.", missing: "driptray", translation: "Поставьте поддон под фланец перед бункеровкой.", topic: "bunkering", options: ["driptray", "bucket", "cloth", "paper"] },
  { sentence: "All scuppers must be _____ before bunkering.", missing: "plugged", translation: "Все шпигаты должны быть заглушены перед бункеровкой.", topic: "bunkering", options: ["plugged", "open", "painted", "cleaned"] },
  { sentence: "The Bunker Delivery Note must be _____ by the Chief Engineer.", missing: "signed", translation: "Бункерная накладная должна быть подписана старшим механиком.", topic: "bunkering", options: ["signed", "read", "stamped", "copied"] },

  // CONVENTIONS
  { sentence: "The oily water separator must be in full _____ for Port State inspection.", missing: "operation", translation: "Сепаратор льяльных вод должен быть в полной работоспособности для инспекции.", topic: "conventions", options: ["operation", "repair", "painting", "storage"] },
  { sentence: "MARPOL Annex I deals with pollution by _____.", missing: "oil", translation: "Приложение I MARPOL касается загрязнения нефтью.", topic: "conventions", options: ["oil", "garbage", "sewage", "air"] },
  { sentence: "Every ship must have a valid ISM _____.", missing: "certificate", translation: "Каждое судно должно иметь действующий сертификат ISM.", topic: "conventions", options: ["certificate", "diploma", "flag", "stamp"] },
  { sentence: "All crew must be trained according to _____ standards.", missing: "STCW", translation: "Весь экипаж должен быть обучен по стандартам STCW.", topic: "conventions", options: ["STCW", "MARPOL", "SOLAS", "ISM"] },
  { sentence: "The Oil Record Book is required by _____.", missing: "MARPOL", translation: "Журнал нефтяных операций требуется по MARPOL.", topic: "conventions", options: ["MARPOL", "SOLAS", "STCW", "IMO"] },

  // REPAIR
  { sentence: "_____ the pump to check the impeller.", missing: "Dismantle", translation: "Разберите насос, чтобы проверить крыльчатку.", topic: "repair", options: ["Dismantle", "Assemble", "Paint", "Sell"] },
  { sentence: "_____ all bolts to the correct torque.", missing: "Tighten", translation: "Затяните все болты с правильным моментом.", topic: "repair", options: ["Tighten", "Loosen", "Remove", "Skip"] },
  { sentence: "Clean and _____ the bearings before assembly.", missing: "lubricate", translation: "Очистите и смажьте подшипники перед сборкой.", topic: "repair", options: ["lubricate", "paint", "sell", "hide"] },
  { sentence: "_____ the crack in the pipe before painting.", missing: "Weld", translation: "Заварите трещину в трубе перед покраской.", topic: "repair", options: ["Weld", "Cut", "Bend", "Break"] },
  { sentence: "_____ the piston with the crane.", missing: "Lift", translation: "Поднимите поршень краном.", topic: "repair", options: ["Lift", "Lower", "Push", "Drop"] },

  // STEAM
  { sentence: "The boiler produces _____ for heating.", missing: "steam", translation: "Котёл производит пар для отопления.", topic: "steam", options: ["steam", "water", "oil", "air"] },
  { sentence: "Soot blowing cleans the boiler _____.", missing: "tubes", translation: "Обдувка сажи очищает трубки котла.", topic: "steam", options: ["tubes", "doors", "walls", "burners"] },
  { sentence: "The boiler burner must be lit carefully to avoid _____.", missing: "blowback", translation: "Горелку котла нужно зажигать осторожно, чтобы избежать обратного удара.", topic: "steam", options: ["blowback", "explosion", "fire", "smoke"] }
];// =====================================================
// ЧАСТЬ 3: Финальные слова + метаданные
// =====================================================

WORDS.push(
  // ============ INSTRUMENTS (ПРИБОРЫ) — 15 слов ============
  { word: "pressure gauge", translation: "манометр", transcription: "[ˈpreʃə ɡeɪdʒ]", topic: "instruments", example: "Check the pressure gauge on the pump." },
  { word: "thermometer", translation: "термометр", transcription: "[θəˈmɒmɪtə]", topic: "instruments", example: "The thermometer shows 80 degrees." },
  { word: "flow meter", translation: "расходомер", transcription: "[fləʊ ˈmiːtə]", topic: "instruments", example: "The flow meter measures fuel consumption." },
  { word: "level gauge", translation: "уровнемер", transcription: "[ˈlevl ɡeɪdʒ]", topic: "instruments", example: "Check the level gauge in the tank." },
  { word: "tachometer", translation: "тахометр", transcription: "[tæˈkɒmɪtə]", topic: "instruments", example: "The tachometer shows engine RPM." },
  { word: "voltmeter", translation: "вольтметр", transcription: "[ˈvəʊltmiːtə]", topic: "instruments", example: "Use a voltmeter to check voltage." },
  { word: "ammeter", translation: "амперметр", transcription: "[ˈæmiːtə]", topic: "instruments", example: "The ammeter reads 15 amperes." },
  { word: "hydrometer", translation: "ареометр", transcription: "[haɪˈdrɒmɪtə]", topic: "instruments", example: "The hydrometer measures density." },
  { word: "pyrometer", translation: "пирометр", transcription: "[paɪˈrɒmɪtə]", topic: "instruments", example: "The pyrometer measures exhaust temperature." },
  { word: "indicator", translation: "индикатор", transcription: "[ˈɪndɪkeɪtə]", topic: "instruments", example: "The indicator shows the valve position." },
  { word: "sensor", translation: "датчик", transcription: "[ˈsensə]", topic: "instruments", example: "The temperature sensor is faulty." },
  { word: "alarm panel", translation: "панель сигнализации", transcription: "[əˈlɑːm ˈpænl]", topic: "instruments", example: "Check the alarm panel every watch." },
  { word: "control panel", translation: "пульт управления", transcription: "[kənˈtrəʊl ˈpænl]", topic: "instruments", example: "The control panel is in the ECR." },
  { word: "ECR (Engine Control Room)", translation: "ЦПУ (центральный пост управления)", transcription: "[iː siː ɑː]", topic: "instruments", example: "The engineer is in the ECR." },
  { word: "Mimic panel", translation: "мнемосхема", transcription: "[ˈmɪmɪk ˈpænl]", topic: "instruments", example: "The mimic panel shows all systems." },

  // ============ PUMPS — 12 слов ============
  { word: "centrifugal pump", translation: "центробежный насос", transcription: "[ˌsentrɪˈfjuːɡl pʌmp]", topic: "pumps", example: "The centrifugal pump moves water." },
  { word: "reciprocating pump", translation: "поршневой насос", transcription: "[rɪˈsɪprəkeɪtɪŋ pʌmp]", topic: "pumps", example: "The reciprocating pump is used for high pressure." },
  { word: "gear pump", translation: "шестерённый насос", transcription: "[ɡɪə pʌmp]", topic: "pumps", example: "The gear pump moves lubricating oil." },
  { word: "screw pump", translation: "винтовой насос", transcription: "[skruː pʌmp]", topic: "pumps", example: "The screw pump handles viscous oil." },
  { word: "impeller", translation: "крыльчатка", transcription: "[ɪmˈpelə]", topic: "pumps", example: "The impeller rotates inside the casing." },
  { word: "casing", translation: "корпус", transcription: "[ˈkeɪsɪŋ]", topic: "pumps", example: "The pump casing is made of cast iron." },
  { word: "suction side", translation: "сторона всасывания", transcription: "[ˈsʌkʃən saɪd]", topic: "pumps", example: "Check the suction side for air leaks." },
  { word: "discharge side", translation: "сторона нагнетания", transcription: "[dɪsˈtʃɑːdʒ saɪd]", topic: "pumps", example: "The discharge side has a valve." },
  { word: "priming", translation: "заливка насоса", transcription: "[ˈpraɪmɪŋ]", topic: "pumps", example: "Priming is necessary before starting." },
  { word: "cavitation", translation: "кавитация", transcription: "[ˌkævɪˈteɪʃən]", topic: "pumps", example: "Cavitation damages the impeller." },
  { word: "gland", translation: "сальник", transcription: "[ɡlænd]", topic: "pumps", example: "The gland prevents leakage." },
  { word: "bearing housing", translation: "корпус подшипника", transcription: "[ˈbeərɪŋ ˈhaʊzɪŋ]", topic: "pumps", example: "The bearing housing must be lubricated." },

  // ============ VALVES — 15 слов ============
  { word: "gate valve", translation: "задвижка", transcription: "[ɡeɪt vælv]", topic: "valves", example: "The gate valve isolates the line." },
  { word: "globe valve", translation: "клапан тарельчатый", transcription: "[ɡləʊb vælv]", topic: "valves", example: "The globe valve controls flow." },
  { word: "ball valve", translation: "шаровой клапан", transcription: "[bɔːl vælv]", topic: "valves", example: "The ball valve is easy to operate." },
  { word: "butterfly valve", translation: "клапан-бабочка", transcription: "[ˈbʌtəflaɪ vælv]", topic: "valves", example: "The butterfly valve is compact." },
  { word: "non-return valve", translation: "обратный клапан", transcription: "[nɒn rɪˈtɜːn vælv]", topic: "valves", example: "The non-return valve prevents backflow." },
  { word: "relief valve", translation: "предохранительный клапан", transcription: "[rɪˈliːf vælv]", topic: "valves", example: "The relief valve opens at high pressure." },
  { word: "safety valve", translation: "предохранительный клапан", transcription: "[ˈseɪfti vælv]", topic: "valves", example: "The boiler has a safety valve." },
  { word: "pressure reducing valve", translation: "редукционный клапан", transcription: "[ˈpreʃə rɪˈdjuːsɪŋ vælv]", topic: "valves", example: "The pressure reducing valve lowers the pressure." },
  { word: "three-way valve", translation: "трёхходовой клапан", transcription: "[θriː weɪ vælv]", topic: "valves", example: "The three-way valve controls flow direction." },
  { word: "valve stem", translation: "шток клапана", transcription: "[vælv stem]", topic: "valves", example: "The valve stem must move freely." },
  { word: "valve seat", translation: "седло клапана", transcription: "[vælv siːt]", topic: "valves", example: "The valve seat must be clean." },
  { word: "valve disc", translation: "тарелка клапана", transcription: "[vælv dɪsk]", topic: "valves", example: "The valve disc opens and closes." },
  { word: "handwheel", translation: "маховик", transcription: "[ˈhændwiːl]", topic: "valves", example: "Turn the handwheel clockwise to close." },
  { word: "actuator", translation: "привод", transcription: "[ˈæktjueɪtə]", topic: "valves", example: "The actuator opens the valve automatically." },
  { word: "packing", translation: "сальниковая набивка", transcription: "[ˈpækɪŋ]", topic: "valves", example: "Replace the packing if it leaks." },

  // ============ PIPING — 10 слов ============
  { word: "pipe", translation: "труба", transcription: "[paɪp]", topic: "piping", example: "The pipe carries steam." },
  { word: "pipeline", translation: "трубопровод", transcription: "[ˈpaɪplaɪn]", topic: "piping", example: "The pipeline runs along the deck." },
  { word: "flange", translation: "фланец", transcription: "[flændʒ]", topic: "piping", example: "The flange connects two pipes." },
  { word: "elbow", translation: "отвод", transcription: "[ˈelbəʊ]", topic: "piping", example: "The elbow changes pipe direction." },
  { word: "tee", translation: "тройник", transcription: "[tiː]", topic: "piping", example: "The tee divides the flow." },
  { word: "reducer", translation: "переходник", transcription: "[rɪˈdjuːsə]", topic: "piping", example: "The reducer changes pipe diameter." },
  { word: "expansion joint", translation: "компенсатор", transcription: "[ɪkˈspænʃən dʒɔɪnt]", topic: "piping", example: "The expansion joint absorbs movement." },
  { word: "gasket", translation: "прокладка", transcription: "[ˈɡæskɪt]", topic: "piping", example: "Replace the gasket if it leaks." },
  { word: "bolt", translation: "болт", transcription: "[bəʊlt]", topic: "piping", example: "Tighten all flange bolts." },
  { word: "nut", translation: "гайка", transcription: "[nʌt]", topic: "piping", example: "Use the correct size of nut." },

  // ============ PAINTING — 12 слов ============
  { word: "to paint", translation: "красить", transcription: "[peɪnt]", topic: "painting", example: "Paint the deck before inspection." },
  { word: "primer", translation: "грунтовка", transcription: "[ˈpraɪmə]", topic: "painting", example: "Apply primer before topcoat." },
  { word: "topcoat", translation: "финишное покрытие", transcription: "[ˈtɒpkəʊt]", topic: "painting", example: "The topcoat gives the final colour." },
  { word: "enamel", translation: "эмаль", transcription: "[ɪˈnæməl]", topic: "painting", example: "Enamel paint is durable." },
  { word: "varnish", translation: "лак", transcription: "[ˈvɑːnɪʃ]", topic: "painting", example: "Apply varnish to the wood." },
  { word: "thinner", translation: "растворитель", transcription: "[ˈθɪnə]", topic: "painting", example: "Add thinner to the paint." },
  { word: "brush", translation: "кисть", transcription: "[brʌʃ]", topic: "painting", example: "Use a brush for edges." },
  { word: "roller", translation: "валик", transcription: "[ˈrəʊlə]", topic: "painting", example: "Use a roller for large areas." },
  { word: "to chip", translation: "скалывать", transcription: "[tʃɪp]", topic: "painting", example: "Chip off the old paint." },
  { word: "rust", translation: "ржавчина", transcription: "[rʌst]", topic: "painting", example: "Remove rust before painting." },
  { word: "sandpaper", translation: "наждачная бумага", transcription: "[ˈsændpeɪpə]", topic: "painting", example: "Smooth the surface with sandpaper." },
  { word: "to degrease", translation: "обезжиривать", transcription: "[diːˈɡriːs]", topic: "painting", example: "Degrease the surface before painting." },

  // ============ FASTENERS — 10 слов ============
  { word: "screw", translation: "винт", transcription: "[skruː]", topic: "fasteners", example: "Tighten the screw with a screwdriver." },
  { word: "bolt", translation: "болт", transcription: "[bəʊlt]", topic: "fasteners", example: "Use a wrench for the bolt." },
  { word: "nut", translation: "гайка", transcription: "[nʌt]", topic: "fasteners", example: "The nut secures the bolt." },
  { word: "washer", translation: "шайба", transcription: "[ˈwɒʃə]", topic: "fasteners", example: "Place a washer under the nut." },
  { word: "stud", translation: "шпилька", transcription: "[stʌd]", topic: "fasteners", example: "The stud is screwed into the block." },
  { word: "rivet", translation: "заклёпка", transcription: "[ˈrɪvɪt]", topic: "fasteners", example: "The rivet holds the plates together." },
  { word: "clamp", translation: "хомут", transcription: "[klæmp]", topic: "fasteners", example: "Use a clamp to hold the hose." },
  { word: "pin", translation: "штифт", transcription: "[pɪn]", topic: "fasteners", example: "The pin aligns the two parts." },
  { word: "key", translation: "шпонка", transcription: "[kiː]", topic: "fasteners", example: "The key prevents rotation." },
  { word: "circlip", translation: "стопорное кольцо", transcription: "[ˈsɜːklɪp]", topic: "fasteners", example: "The circlip holds the bearing." },

  // ============ SHIP'S PARTICULARS — 10 слов ============
  { word: "deadweight (DWT)", translation: "дедвейт", transcription: "[ˈdedweɪt]", topic: "particulars", example: "The DWT of our ship is 50000 tonnes." },
  { word: "gross tonnage (GT)", translation: "валовая вместимость", transcription: "[ɡrəʊs ˈtʌnɪdʒ]", topic: "particulars", example: "The gross tonnage is 30000." },
  { word: "length overall (LOA)", translation: "длина наибольшая", transcription: "[leŋθ ˈəʊvərɔːl]", topic: "particulars", example: "The LOA is 200 metres." },
  { word: "beam", translation: "ширина", transcription: "[biːm]", topic: "particulars", example: "The beam is 32 metres." },
  { word: "draft", translation: "осадка", transcription: "[drɑːft]", topic: "particulars", example: "The draft is 12.5 metres." },
  { word: "speed", translation: "скорость", transcription: "[spiːd]", topic: "particulars", example: "Service speed is 14 knots." },
  { word: "flag", translation: "флаг", transcription: "[flæɡ]", topic: "particulars", example: "Our flag is Panama." },
  { word: "port of registry", translation: "порт приписки", transcription: "[pɔːt əv ˈredʒɪstri]", topic: "particulars", example: "The port of registry is Singapore." },
  { word: "IMO number", translation: "номер IMO", transcription: "[aɪ em əʊ ˈnʌmbə]", topic: "particulars", example: "The IMO number identifies the ship." },
  { word: "call sign", translation: "позывной", transcription: "[kɔːl saɪn]", topic: "particulars", example: "The call sign is used in radio communication." }
);

// =====================================================
// ТЕМЫ (метаданные: иконка и название)
// =====================================================
const TOPICS = {
  crew: { icon: "👥", title: "Crew & Ranks", desc: "Экипаж и должности" },
  vessel: { icon: "🚢", title: "Ship Parts", desc: "Части судна" },
  types: { icon: "📦", title: "Types of Vessels", desc: "Типы судов" },
  safety: { icon: "🛡️", title: "Safety Equipment", desc: "Безопасность" },
  engine: { icon: "⚙️", title: "Diesel Engine", desc: "Дизельный двигатель" },
  fuel: { icon: "⛽", title: "Fuel System", desc: "Топливная система" },
  lube: { icon: "🛢️", title: "Lubrication", desc: "Система смазки" },
  cooling: { icon: "💧", title: "Cooling Water", desc: "Охлаждение" },
  maintenance: { icon: "🔧", title: "Maintenance", desc: "Обслуживание" },
  troubleshooting: { icon: "⚠️", title: "Troubleshooting", desc: "Неисправности" },
  bunkering: { icon: "🛳️", title: "Bunkering", desc: "Бункеровка" },
  conventions: { icon: "📜", title: "Conventions", desc: "Конвенции IMO" },
  repair: { icon: "🛠️", title: "Repair Verbs", desc: "Глаголы ремонта" },
  tools: { icon: "🔩", title: "Tools", desc: "Инструменты" },
  steam: { icon: "♨️", title: "Steam System", desc: "Паровая система" },
  refrigeration: { icon: "❄️", title: "Refrigeration", desc: "Холодильная установка" },
  electrical: { icon: "⚡", title: "Electrical", desc: "Электрика" },
  weather: { icon: "🌊", title: "Weather & Sea", desc: "Погода и море" },
  navigation: { icon: "🧭", title: "Navigation", desc: "Навигация" },
  communication: { icon: "📻", title: "Communication", desc: "Связь" },
  paperwork: { icon: "📋", title: "Paperwork", desc: "Документы" },
  emergency: { icon: "🚨", title: "Emergency", desc: "Аварийные ситуации" },
  instruments: { icon: "📊", title: "Instruments", desc: "Приборы" },
  pumps: { icon: "🌀", title: "Pumps", desc: "Насосы" },
  valves: { icon: "🔴", title: "Valves", desc: "Клапаны" },
  piping: { icon: "🔗", title: "Piping", desc: "Трубопроводы" },
  painting: { icon: "🎨", title: "Painting", desc: "Окраска" },
  fasteners: { icon: "🔧", title: "Fasteners", desc: "Крепёж" },
  particulars: { icon: "📐", title: "Ship's Particulars", desc: "Характеристики судна" }
};

// =====================================================
// ЧАСТЬ 4: КОНВЕНЦИИ IMO
// =====================================================
const CONVENTIONS = {
  solas: {
    icon: "🛟",
    title: "SOLAS",
    fullName: "International Convention for the Safety of Life at Sea",
    fullNameRu: "Международная конвенция по охране человеческой жизни на море",
    year: "1974 (с поправками)",
    desc: "Устанавливает минимальные стандарты безопасности при постройке, оборудовании и эксплуатации судов.",
    topics: [
      "Конструкция — противопожарная защита, деление на отсеки",
      "Спасательные средства — шлюпки, плоты, жилеты",
      "Радиосвязь — GMDSS, аварийные частоты",
      "Навигационная безопасность — огни, знаки, сигналы",
      "Перевозка опасных грузов — упаковка, маркировка",
      "Управление безопасностью — ISM Code (глава IX)"
    ],
    questions: [
      {
        q: "What is the main objective of SOLAS?",
        qRu: "Какова основная цель SOLAS?",
        options: [
          "To specify minimum safety standards for ships",
          "To regulate fishing quotas",
          "To set fuel prices",
          "To control cargo weights"
        ],
        correct: 0,
        explain: "SOLAS устанавливает минимальные стандарты безопасности судов."
      },
      {
        q: "Which chapter of SOLAS covers the ISM Code?",
        qRu: "В какой главе SOLAS находится Кодекс ISM?",
        options: ["Chapter IX", "Chapter I", "Chapter V", "Chapter XII"],
        correct: 0,
        explain: "ISM Code находится в главе IX конвенции SOLAS."
      },
      {
        q: "How often must lifeboat drills be conducted?",
        qRu: "Как часто должны проводиться учения по шлюпкам?",
        options: [
          "Every month",
          "Once a year",
          "Every 6 months",
          "Every week"
        ],
        correct: 0,
        explain: "Учения по шлюпкам проводятся не реже одного раза в месяц."
      },
      {
        q: "What does SOLAS regulate regarding navigation?",
        qRu: "Что SOLAS регулирует в области навигации?",
        options: [
          "Lights, shapes, and signals",
          "Fuel efficiency",
          "Crew salaries",
          "Cargo pricing"
        ],
        correct: 0,
        explain: "SOLAS регулирует огни, знаки и сигналы на судах."
      },
      {
        q: "Which equipment is required by SOLAS on all ships?",
        qRu: "Какое оборудование требуется SOLAS на всех судах?",
        options: [
          "Life-saving appliances",
          "Swimming pool",
          "Gym equipment",
          "Movie theatre"
        ],
        correct: 0,
        explain: "Спасательные средства обязательны по SOLAS."
      }
    ]
  },
  marpol: {
    icon: "🌍",
    title: "MARPOL",
    fullName: "International Convention for the Prevention of Pollution from Ships",
    fullNameRu: "Международная конвенция по предотвращению загрязнения с судов",
    year: "1973/1978 (с поправками)",
    desc: "Регулирует предотвращение загрязнения морской среды нефтью, химикатами, сточными водами и мусором.",
    topics: [
      "Annex I — загрязнение нефтью",
      "Annex II — вредные жидкие вещества наливом",
      "Annex III — вредные вещества в упаковке",
      "Annex IV — сточные воды",
      "Annex V — мусор",
      "Annex VI — загрязнение воздуха"
    ],
    questions: [
      {
        q: "What does MARPOL Annex I deal with?",
        qRu: "Чему посвящено Приложение I MARPOL?",
        options: [
          "Prevention of pollution by oil",
          "Prevention of air pollution",
          "Prevention of garbage pollution",
          "Prevention of sewage pollution"
        ],
        correct: 0,
        explain: "Annex I касается предотвращения загрязнения нефтью."
      },
      {
        q: "What does MARPOL Annex VI regulate?",
        qRu: "Что регулирует Приложение VI MARPOL?",
        options: [
          "Air pollution from ships",
          "Oil pollution",
          "Sewage",
          "Garbage"
        ],
        correct: 0,
        explain: "Annex VI регулирует загрязнение воздуха с судов."
      },
      {
        q: "Where must oil operations be recorded?",
        qRu: "Где должны регистрироваться нефтяные операции?",
        options: [
          "Oil Record Book",
          "Logbook",
          "Bunker Delivery Note",
          "Engineer's notebook"
        ],
        correct: 0,
        explain: "Все нефтяные операции записываются в Oil Record Book."
      },
      {
        q: "What is the maximum sulphur content allowed in fuel in ECAs?",
        qRu: "Какой максимум серы в топливе разрешён в ECA зонах?",
        options: ["0.1%", "0.5%", "1.0%", "3.5%"],
        correct: 0,
        explain: "В зонах ECA (Emission Control Areas) — 0.1% серы."
      },
      {
        q: "Which MARPOL Annex concerns garbage?",
        qRu: "Какое Приложение MARPOL касается мусора?",
        options: ["Annex V", "Annex I", "Annex III", "Annex VI"],
        correct: 0,
        explain: "Annex V — предотвращение загрязнения мусором."
      },
      {
        q: "What must be done before discharging sewage?",
        qRu: "Что нужно сделать перед сбросом сточных вод?",
        options: [
          "Treat it according to MARPOL Annex IV",
          "Just open the valve",
          "Mix with ballast water",
          "Nothing"
        ],
        correct: 0,
        explain: "Сточные воды должны быть обработаны согласно Annex IV."
      }
    ]
  },
  stcw: {
    icon: "🎓",
    title: "STCW",
    fullName: "International Convention on Standards of Training, Certification and Watchkeeping",
    fullNameRu: "Конвенция о подготовке и дипломировании моряков и несении вахты",
    year: "1978 (Manila Amendments 2010)",
    desc: "Устанавливает требования к подготовке, дипломированию и несению вахты для моряков.",
    topics: [
      "Подготовка и сертификация офицеров",
      "Часы отдыха и вахты",
      "Медицинские требования",
      "Противопожарная подготовка",
      "Подготовка по спасательным средствам",
      "Пересмотр Manila Amendments 2010"
    ],
    questions: [
      {
        q: "What does STCW stand for?",
        qRu: "Что означает STCW?",
        options: [
          "Standards of Training, Certification and Watchkeeping",
          "Safety Training for Crew Workers",
          "Ship Transport and Cargo Watch",
          "Standard Tank Cleaning Work"
        ],
        correct: 0,
        explain: "STCW — Standards of Training, Certification and Watchkeeping."
      },
      {
        q: "How many hours of rest must a watchkeeper have in 24 hours?",
        qRu: "Сколько часов отдыха должно быть у вахтенного в сутки?",
        options: ["At least 10 hours", "At least 8 hours", "At least 6 hours", "No rule"],
        correct: 0,
        explain: "Минимум 10 часов отдыха за 24 часа (по STCW)."
      },
      {
        q: "When were the Manila Amendments adopted?",
        qRu: "Когда были приняты Манильские поправки?",
        options: ["2010", "1995", "2000", "2015"],
        correct: 0,
        explain: "Манильские поправки — 2010 год."
      },
      {
        q: "What document proves a seafarer's qualification?",
        qRu: "Какой документ подтверждает квалификацию моряка?",
        options: [
          "Certificate of Competency",
          "Passport",
          "Seaman's book",
          "Medical certificate"
        ],
        correct: 0,
        explain: "Certificate of Competency — сертификат компетентности."
      },
      {
        q: "What is the minimum age for a watchkeeper?",
        qRu: "Минимальный возраст для вахтенного?",
        options: ["18 years", "16 years", "20 years", "21 years"],
        correct: 0,
        explain: "Минимум 18 лет для несения вахты."
      }
    ]
  },
  ism: {
    icon: "📋",
    title: "ISM Code",
    fullName: "International Safety Management Code",
    fullNameRu: "Международный кодекс по управлению безопасностью",
    year: "1993 (в силе с 1998)",
    desc: "Устанавливает стандарты безопасного управления и эксплуатации судов, предотвращает травмы и загрязнение среды.",
    topics: [
      "Политика безопасности компании",
      "Процедуры и инструкции",
      "Designated Person (DP)",
      "Внутренние и внешние аудиты",
      "DOC и SMC сертификаты",
      "Разрешения на работы (Hot Work, Enclosed Space)"
    ],
    questions: [
      {
        q: "What is the main goal of the ISM Code?",
        qRu: "Какова основная цель Кодекса ISM?",
        options: [
          "To ensure safety at sea and prevent pollution",
          "To increase cargo capacity",
          "To reduce crew numbers",
          "To set fuel prices"
        ],
        correct: 0,
        explain: "Цель ISM — безопасность на море и предотвращение загрязнения."
      },
      {
        q: "What is a Designated Person (DP)?",
        qRu: "Кто такой Designated Person (DP)?",
        options: [
          "A person supervising the SMS",
          "The captain",
          "The cook",
          "A port official"
        ],
        correct: 0,
        explain: "DP контролирует работу Системы управления безопасностью."
      },
      {
        q: "What document does a company receive after an ISM audit?",
        qRu: "Какой документ получает компания после аудита ISM?",
        options: [
          "Document of Compliance (DOC)",
          "Safety Management Certificate (SMC)",
          "International Load Line Certificate",
          "Tonnage Certificate"
        ],
        correct: 0,
        explain: "Компания получает DOC (Document of Compliance)."
      },
      {
        q: "What document does a ship receive after an ISM audit?",
        qRu: "Какой документ получает судно после аудита ISM?",
        options: [
          "Safety Management Certificate (SMC)",
          "Document of Compliance (DOC)",
          "Cargo Ship Safety Certificate",
          "Medical Certificate"
        ],
        correct: 0,
        explain: "Судно получает SMC (Safety Management Certificate)."
      },
      {
        q: "What permit is required for welding on a ship?",
        qRu: "Какое разрешение требуется для сварки на судне?",
        options: [
          "Hot Work Permit",
          "Enclosed Space Entry Permit",
          "Electrical Work Permit",
          "Working Aloft Permit"
        ],
        correct: 0,
        explain: "Для сварочных работ нужно Hot Work Permit."
      },
      {
        q: "What permit is needed before entering a fuel tank?",
        qRu: "Какое разрешение нужно перед входом в топливный танк?",
        options: [
          "Enclosed Space Entry Permit",
          "Hot Work Permit",
          "Underwater Work Permit",
          "Cold Work Permit"
        ],
        correct: 0,
        explain: "Для входа в замкнутое пространство нужен Enclosed Space Entry Permit."
      }
    ]
  }
};

// =====================================================
// ЧАСТЬ 5: ДИАЛОГИ
// =====================================================
const DIALOGS = [
  {
    id: "captain_report",
    title: "📞 Доклад капитану о проблеме",
    desc: "Engineer сообщает о неисправности главного двигателя",
    lines: [
      { speaker: "Engineer", avatar: "🔧", en: "Captain, we have a problem with the main engine.", ru: "Капитан, у нас проблема с главным двигателем." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "What kind of problem?", ru: "Какая именно проблема?" },
      { speaker: "Engineer", avatar: "🔧", en: "The fuel injection valve on cylinder No. 3 is faulty.", ru: "Топливная форсунка в цилиндре №3 неисправна." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Can we continue the voyage?", ru: "Можем ли мы продолжить рейс?" },
      { speaker: "Engineer", avatar: "🔧", en: "Yes, but we need to reduce speed to 80% power.", ru: "Да, но нам нужно снизить скорость до 80% мощности." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "How long will the repair take?", ru: "Сколько времени займёт ремонт?" },
      { speaker: "Engineer", avatar: "🔧", en: "Approximately 4 hours. We have a spare valve onboard.", ru: "Примерно 4 часа. У нас есть запасная форсунка на борту." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Good. Keep me informed.", ru: "Хорошо. Держите меня в курсе." }
    ],
    quiz: {
      q: "How long will the repair take?",
      options: ["4 hours", "2 days", "30 minutes", "1 week"],
      correct: 0
    }
  },
  {
    id: "bunkering",
    title: "⛽ Бункеровка",
    desc: "Переговоры с бункеровочной баржей",
    lines: [
      { speaker: "Chief Eng.", avatar: "🔧", en: "Bunkering barge, this is vessel Neptune. Ready to start bunkering.", ru: "Бункеровщик, это судно Neptune. Готовы начать бункеровку." },
      { speaker: "Barge", avatar: "🛳️", en: "Vessel Neptune, we are ready. What is the pumping rate?", ru: "Судно Neptune, мы готовы. Какая скорость перекачки?" },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Start with 50 tonnes per hour, then increase to 100.", ru: "Начните с 50 тонн в час, потом увеличьте до 100." },
      { speaker: "Barge", avatar: "🛳️", en: "Understood. We need your manifold connection details.", ru: "Понял. Нам нужны данные о подключении к вашему манифольду." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "6-inch flange on the port side. Flange bolts are ready.", ru: "6-дюймовый фланец с левого борта. Болты готовы." },
      { speaker: "Barge", avatar: "🛳️", en: "Starting pumping now. Please check for leaks.", ru: "Начинаем перекачку. Проверьте на утечки." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "All clear. No leaks. Continue pumping.", ru: "Всё чисто. Утечек нет. Продолжайте." },
      { speaker: "Barge", avatar: "🛳️", en: "We will stop at 90% capacity for ullage check.", ru: "Мы остановимся на 90% для замера свободного пространства." }
    ],
    quiz: {
      q: "At what capacity will they stop for ullage check?",
      options: ["90%", "50%", "100%", "70%"],
      correct: 0
    }
  },
  {
    id: "man_overboard",
    title: "🚨 Человек за бортом",
    desc: "Действия команды при падении человека",
    lines: [
      { speaker: "Lookout", avatar: "👁️", en: "Man overboard! Starboard side!", ru: "Человек за бортом! Правый борт!" },
      { speaker: "Bridge", avatar: "👨‍✈️", en: "Bridge copies. Throwing life buoy!", ru: "Мостик принял. Бросаю спасательный круг!" },
      { speaker: "Bridge", avatar: "👨‍✈️", en: "Engine room, reduce speed to dead slow!", ru: "Машинное, сбросить скорость до самого малого!" },
      { speaker: "Engineer", avatar: "🔧", en: "Reducing speed to dead slow. Ready for manoeuvring!", ru: "Снижаю до самого малого. Готовы к маневрированию!" },
      { speaker: "Bridge", avatar: "👨‍✈️", en: "Prepare rescue boat on starboard side!", ru: "Подготовить спасательную шлюпку с правого борта!" },
      { speaker: "Crew", avatar: "🚤", en: "Rescue boat ready. Crew with life jackets standing by.", ru: "Спасательная шлюпка готова. Экипаж в жилетах наготове." },
      { speaker: "Bridge", avatar: "👨‍✈️", en: "VHF on channel 16. Broadcasting Mayday to other ships.", ru: "УКВ на 16 канале. Передаю Mayday другим судам." }
    ],
    quiz: {
      q: "What speed is ordered after man overboard?",
      options: ["Dead slow", "Full ahead", "Stop engine", "Half ahead"],
      correct: 0
    }
  },
  {
    id: "port_state_control",
    title: "🛂 Инспекция Port State Control",
    desc: "Проверка судна портовыми властями",
    lines: [
      { speaker: "Inspector", avatar: "🕵️", en: "Good morning. I am from Port State Control.", ru: "Доброе утро. Я из Port State Control." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Good morning. Welcome aboard. Here are our certificates.", ru: "Доброе утро. Добро пожаловать. Вот наши сертификаты." },
      { speaker: "Inspector", avatar: "🕵️", en: "Please show me the Oil Record Book.", ru: "Покажите, пожалуйста, журнал нефтяных операций." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Certainly. Chief Engineer, bring the Oil Record Book.", ru: "Конечно. Стармех, принесите Oil Record Book." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Here it is. All entries are up to date.", ru: "Вот он. Все записи актуальны." },
      { speaker: "Inspector", avatar: "🕵️", en: "I see. Please show me the oily water separator.", ru: "Понятно. Покажите сепаратор льяльных вод." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Follow me to the engine room, please.", ru: "Пройдёмте в машинное отделение." },
      { speaker: "Inspector", avatar: "🕵️", en: "The separator looks fine. I need to check the alarm.", ru: "Сепаратор в порядке. Мне нужно проверить сигнализацию." }
    ],
    quiz: {
      q: "What does the Inspector ask to see first?",
      options: ["Oil Record Book", "Sewage plant", "Garbage plan", "Fire extinguishers"],
      correct: 0
    }
  },
  {
    id: "fire_engine_room",
    title: "🔥 Пожар в машинном отделении",
    desc: "Действия команды при возгорании",
    lines: [
      { speaker: "Watchkeeper", avatar: "👀", en: "Fire! Fire in the engine room! Near fuel pump!", ru: "Пожар! Пожар в машинном отделении! Возле топливного насоса!" },
      { speaker: "Bridge", avatar: "👨‍✈️", en: "Fire alarm sounded. All crew to muster stations!", ru: "Пожарная тревога включена. Всем на места сбора!" },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Stop fuel pumps! Shut off fuel supply!", ru: "Остановить топливные насосы! Перекрыть подачу топлива!" },
      { speaker: "Engineer", avatar: "🔧", en: "Fuel pumps stopped. Local extinguishers ready.", ru: "Топливные насосы остановлены. Огнетушители готовы." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Try to extinguish with foam. Watch for smoke.", ru: "Пробуем тушить пеной. Следите за дымом." },
      { speaker: "Bridge", avatar: "👨‍✈️", en: "If cannot extinguish in 5 minutes, use CO2 system.", ru: "Если не потушим за 5 минут — используем систему CO2." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Fire is under control. Foam extinguishers worked.", ru: "Пожар под контролем. Пенные огнетушители сработали." }
    ],
    quiz: {
      q: "What is the first action of the Chief Engineer?",
      options: [
        "Stop fuel pumps and shut off fuel supply",
        "Open windows",
        "Call the captain",
        "Run outside"
      ],
      correct: 0
    }
  },
  {
    id: "watch_handover",
    title: "🔄 Сдача вахты",
    desc: "Передача вахты между механиками",
    lines: [
      { speaker: "3rd Eng.", avatar: "🔧", en: "Everything is running normally. Main engine at full ahead.", ru: "Всё работает нормально. Главный двигатель — полный вперёд." },
      { speaker: "4th Eng.", avatar: "🔧", en: "Any problems during your watch?", ru: "Были проблемы во время вашей вахты?" },
      { speaker: "3rd Eng.", avatar: "🔧", en: "Small leakage in cooling water line. Watch it closely.", ru: "Небольшая утечка в линии охлаждающей воды. Следите внимательно." },
      { speaker: "4th Eng.", avatar: "🔧", en: "Understood. Any other readings to note?", ru: "Понял. Какие ещё показания записать?" },
      { speaker: "3rd Eng.", avatar: "🔧", en: "Exhaust temperatures are all normal. Cylinder 4 slightly lower.", ru: "Температуры выхлопа нормальные. Цилиндр 4 чуть ниже." },
      { speaker: "4th Eng.", avatar: "🔧", en: "Will check in 30 minutes. Watch is now mine.", ru: "Проверю через 30 минут. Вахта моя." },
      { speaker: "3rd Eng.", avatar: "🔧", en: "Good watch. I am going to rest.", ru: "Хорошей вахты. Я иду отдыхать." }
    ],
    quiz: {
      q: "What problem did the 3rd Engineer report?",
      options: [
        "Small leakage in cooling water line",
        "Fire in engine room",
        "Low fuel level",
        "Broken pump"
      ],
      correct: 0
    }
  },
  {
    id: "berthing",
    title: "⚓ Швартовка",
    desc: "Приход в порт и швартовка",
    lines: [
      { speaker: "Captain", avatar: "👨‍✈️", en: "Bridge to engine room: stand by engine for manoeuvring.", ru: "Мостик — машинному: приготовиться к маневрированию." },
      { speaker: "Engineer", avatar: "🔧", en: "Engine room ready. All systems operational.", ru: "Машинное готово. Все системы работают." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Port side alongside. Prepare mooring lines.", ru: "Швартовка левым бортом. Приготовить швартовы." },
      { speaker: "Bosun", avatar: "⚓", en: "Mooring party ready on forecastle.", ru: "Швартовная команда на баке готова." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Ahead slow. Port engine stop.", ru: "Малый вперёд. Левый двигатель стоп." },
      { speaker: "Engineer", avatar: "🔧", en: "Port engine stopped.", ru: "Левый двигатель остановлен." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Dead slow astern. Bow thruster to port 50%.", ru: "Самый малый назад. Подруливающее на левый борт 50%." },
      { speaker: "Bosun", avatar: "⚓", en: "Lines ashore! Heaving in mooring lines!", ru: "Швартовы на берегу! Подтягиваем швартовы!" },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Engine room: finished with engines.", ru: "Машинное: машины не нужны." }
    ],
    quiz: {
      q: "How is the ship moored?",
      options: ["Port side alongside", "Starboard side alongside", "Anchored", "Towing"],
      correct: 0
    }
  },
  {
    id: "medical_emergency",
    title: "🚑 Медицинская помощь",
    desc: "Обращение к врачу по радио",
    lines: [
      { speaker: "Captain", avatar: "👨‍✈️", en: "Radio medical, this is vessel Neptune. We have a medical emergency.", ru: "Радиомедик, это судно Neptune. У нас медицинская помощь." },
      { speaker: "Doctor", avatar: "👨‍⚕️", en: "Neptune, go ahead. What is the situation?", ru: "Neptune, говорите. Какая ситуация?" },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Crew member has severe chest pain. Difficulty breathing.", ru: "Член экипажа с сильной болью в груди. Тяжёлое дыхание." },
      { speaker: "Doctor", avatar: "👨‍⚕️", en: "Any history of heart problems?", ru: "Есть ли проблемы с сердцем в анамнезе?" },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Yes, he had high blood pressure. Age 52.", ru: "Да, у него было высокое давление. Возраст 52." },
      { speaker: "Doctor", avatar: "👨‍⚕️", en: "Give him oxygen and aspirin. Monitor vital signs.", ru: "Дайте ему кислород и аспирин. Следите за показателями." },
      { speaker: "Captain", avatar: "👨‍✈️", en: "Oxygen and aspirin given. Vital signs recorded.", ru: "Кислород и аспирин даны. Показатели записаны." },
      { speaker: "Doctor", avatar: "👨‍⚕️", en: "Prepare for helicopter evacuation at next port.", ru: "Готовьтесь к эвакуации вертолётом в следующем порту." }
    ],
    quiz: {
      q: "What did the doctor recommend?",
      options: ["Oxygen and aspirin", "Coffee and rest", "No action", "Antibiotics"],
      correct: 0
    }
  },
  {
    id: "engine_alarm",
    title: "⚠️ Аварийная сигнализация",
    desc: "Реакция на сработавшую сигнализацию",
    lines: [
      { speaker: "Alarm", avatar: "🔔", en: "BEEP BEEP BEEP — Oil mist detector alarm!", ru: "БИП БИП БИП — сигнал детектора масляного тумана!" },
      { speaker: "Watchkeeper", avatar: "👀", en: "Oil mist alarm on main engine crankcase!", ru: "Сигнал масляного тумана в картере главного двигателя!" },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Reduce engine speed immediately! Inform the bridge!", ru: "Немедленно снизить обороты! Сообщить на мостик!" },
      { speaker: "Bridge", avatar: "👨‍✈️", en: "Bridge copies. Reducing speed to slow ahead.", ru: "Мостик принял. Снижаю до малого вперёд." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Open crankcase inspection covers carefully. Watch for fire!", ru: "Осторожно открыть лючки картера. Следите за огнём!" },
      { speaker: "Engineer", avatar: "🔧", en: "No visible fire. Oil mist concentration is falling.", ru: "Огня не видно. Концентрация масляного тумана падает." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Continue at reduced speed. Check bearings at next port.", ru: "Продолжаем на пониженной. Проверим подшипники в порту." }
    ],
    quiz: {
      q: "What alarm sounded?",
      options: [
        "Oil mist detector alarm",
        "Fire alarm",
        "General alarm",
        "Steering gear alarm"
      ],
      correct: 0
    }
  },
  {
    id: "fuel_transfer",
    title: "⛽ Перекачка топлива",
    desc: "Перевод топлива между танками",
    lines: [
      { speaker: "Chief Eng.", avatar: "🔧", en: "We need to transfer fuel from No. 3 to No. 5 tank.", ru: "Нужно перекачать топливо из танка №3 в танк №5." },
      { speaker: "3rd Eng.", avatar: "🔧", en: "Understood. Should I prepare the transfer pump?", ru: "Понял. Подготовить перекачивающий насос?" },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Yes. Open the suction valve on No. 3 and discharge on No. 5.", ru: "Да. Открыть всасывающий на №3 и нагнетательный на №5." },
      { speaker: "3rd Eng.", avatar: "🔧", en: "Valves opened. Ready to start pump.", ru: "Клапаны открыты. Готовы запустить насос." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Start slow. Watch the tank levels carefully.", ru: "Запускайте медленно. Следите за уровнями." },
      { speaker: "3rd Eng.", avatar: "🔧", en: "Pump running. Transfer rate is 20 cubic metres per hour.", ru: "Насос работает. Скорость — 20 кубометров в час." },
      { speaker: "Chief Eng.", avatar: "🔧", en: "Good. Inform me when No. 5 reaches 80%.", ru: "Хорошо. Сообщите, когда №5 достигнет 80%." }
    ],
    quiz: {
      q: "At what tank level should the 3rd Engineer report?",
      options: ["80%", "50%", "100%", "90%"],
      correct: 0
    }
  }
];

// =====================================================
// ЧАСТЬ 6: АВАРИЙНЫЕ СЦЕНАРИИ
// =====================================================
const EMERGENCIES = [
  {
    id: "fire_engine",
    title: "🔥 Пожар в машинном отделении",
    desc: "Возгорание в районе топливного насоса",
    steps: [
      { text: "Обнаружить пожар и оповестить капитана по внутренней связи", ok: true },
      { text: "Активировать пожарную сигнализацию (нажать кнопку)", ok: true },
      { text: "Остановить топливные насосы и перекрыть подачу топлива", ok: true },
      { text: "Открыть все окна и двери, чтобы проветрить", ok: false, why: "Доступ кислорода усилит пожар!" },
      { text: "Попытаться потушить огонь пенным огнетушителем", ok: true },
      { text: "Эвакуировать всех из машинного отделения", ok: true },
      { text: "Использовать систему CO₂, если пожар не удаётся потушить за 5 минут", ok: true },
      { text: "Снять спасательный жилет, чтобы не мешал", ok: false, why: "Жилет нужно НАДЕТЬ, а не снять!" }
    ]
  },
  {
    id: "man_overboard",
    title: "🚨 Человек за бортом",
    desc: "Падение члена экипажа за борт",
    steps: [
      { text: "Крикнуть «Man overboard!» и указать сторону", ok: true },
      { text: "Бросить спасательный круг с самозажигающимся буем", ok: true },
      { text: "Сообщить на мостик немедленно", ok: true },
      { text: "Сбросить скорость до самого малого", ok: true },
      { text: "Спустить спасательную шлюпку", ok: true },
      { text: "Продолжить движение полным ходом, чтобы быстрее вызвать помощь", ok: false, why: "Скорость нужно сбросить, чтобы шлюпка не потерялась!" },
      { text: "Записать время падения и координаты", ok: true },
      { text: "Сделать объявление по радио (Mayday relay)", ok: true }
    ]
  },
  {
    id: "flooding",
    title: "🌊 Затопление",
    desc: "Пробоина в корпусе, вода поступает в трюм",
    steps: [
      { text: "Немедленно оповестить мостик и капитана", ok: true },
      { text: "Определить место пробоины и темп поступления воды", ok: true },
      { text: "Закрыть водонепроницаемые двери", ok: true },
      { text: "Запустить осушительные насосы", ok: true },
      { text: "Открыть все клапаны, чтобы вода ушла сама", ok: false, why: "Это только увеличит поступление воды!" },
      { text: "Использовать цементный ящик или пробку для временной заделки", ok: true },
      { text: "Откачать воду и контролировать устойчивость судна", ok: true },
      { text: "Передать сигнал бедствия, если не удаётся справиться", ok: true }
    ]
  },
  {
    id: "collision",
    title: "💥 Столкновение",
    desc: "Столкновение с другим судном",
    steps: [
      { text: "Остановить главный двигатель (при необходимости)", ok: true },
      { text: "Оценить повреждения обоих судов", ok: true },
      { text: "Обменяться информацией с другим судном по VHF", ok: true },
      { text: "Уйти как можно быстрее, не оказывая помощи", ok: false, why: "По морскому праву обязательно оказать помощь!" },
      { text: "Сообщить в ближайший порт и судовладельцу", ok: true },
      { text: "Закрыть водонепроницаемые двери в повреждённых отсеках", ok: true },
      { text: "Проверить наличие пострадавших, оказать первую помощь", ok: true },
      { text: "Зафиксировать координаты, время, обстоятельства для отчёта", ok: true }
    ]
  },
  {
    id: "grounding",
    title: "⚓ Посадка на мель",
    desc: "Судно село на мель вблизи берега",
    steps: [
      { text: "Остановить главный двигатель", ok: true },
      { text: "Проверить глубину вокруг судна (эхолот, лот)", ok: true },
      { text: "Определить, есть ли пробоина и поступление воды", ok: true },
      { text: "Дать полный ход назад, чтобы сняться с мели", ok: false, why: "Сначала нужно оценить повреждения! Задний ход может сделать хуже." },
      { text: "Объявить тревогу и собрать экипаж на местах сбора", ok: true },
      { text: "Перекачать балласт/топливо для изменения дифферента", ok: true },
      { text: "Сообщить в ближайший порт и запросить помощь", ok: true },
      { text: "Вести постоянное наблюдение за уровнем воды в трюмах", ok: true }
    ]
  },
  {
    id: "blackout",
    title: "⚡ Полное отключение электричества",
    desc: "Blackout — все генераторы остановились",
    steps: [
      { text: "Аварийный генератор должен запуститься автоматически", ok: true },
      { text: "Проверить работу аварийного генератора", ok: true },
      { text: "Сообщить на мостик о ситуации", ok: true },
      { text: "Проверить причины срабатывания защиты", ok: true },
      { text: "Запустить дизель-генератор вручную", ok: true },
      { text: "Оставить все включённые приборы работать", ok: false, why: "При запуске генератора большая нагрузка может снова вызвать blackout!" },
      { text: "Постепенно вводить нагрузку после запуска", ok: true },
      { text: "Проверить состояние главного двигателя", ok: true }
    ]
  },
  {
    id: "oil_spill",
    title: "🛢️ Разлив нефти",
    desc: "Утечка топлива в море во время бункеровки",
    steps: [
      { text: "Немедленно остановить все операции с топливом", ok: true },
      { text: "Перекрыть клапаны на манифольде", ok: true },
      { text: "Оповестить бункеровщика и портовые власти", ok: true },
      { text: "Промыть палубу забортной водой в море", ok: false, why: "Смывать нефть в море запрещено — это увеличит загрязнение!" },
      { text: "Использовать сорбенты и боновые заграждения", ok: true },
      { text: "Собрать разлитое топливо в специальные ёмкости", ok: true },
      { text: "Записать инцидент в Oil Record Book", ok: true },
      { text: "Сообщить судовладельцу и P&I клубу", ok: true }
    ]
  },
  {
    id: "steering_failure",
    title: "🎯 Отказ рулевого управления",
    desc: "Отказ главной рулевой машины",
    steps: [
      { text: "Сообщить на мостик немедленно", ok: true },
      { text: "Переключиться на аварийный рулевой привод", ok: true },
      { text: "Уменьшить скорость для лучшей управляемости", ok: true },
      { text: "Продолжить движение полным ходом", ok: false, why: "На полном ходу без руля судно неуправляемо!" },
      { text: "Показать знаки/огни «Not Under Command»", ok: true },
      { text: "Вызвать буксир, если требуется", ok: true },
      { text: "Определить причину поломки", ok: true },
      { text: "Сообщить в порт и судовладельцу", ok: true }
    ]
  }
];

// =====================================================
// ЧАСТЬ 7: СУДОВЫЕ ДОКУМЕНТЫ (ОБУЧАЮЩИЕ)
// =====================================================
const DOCS = [
  {
    id: "bunker_note",
    title: "📄 Bunker Delivery Note (BDN)",
    desc: "Бункерная накладная — обязательный документ при бункеровке",
    purpose: "Подтверждает количество и качество полученного топлива. Хранится на борту 3 года.",
    fields: [
      { name: "Name of ship", value: "MV Neptune" },
      { name: "IMO number", value: "9123456" },
      { name: "Port of delivery", value: "Singapore" },
      { name: "Date of delivery", value: "15.03.2025" },
      { name: "Product name", value: "IFO 380" },
      { name: "Quantity (MT)", value: "500.5 tonnes" },
      { name: "Density at 15°C", value: "0.9856 kg/m³" },
      { name: "Sulphur content", value: "0.42% m/m" },
      { name: "Flash point", value: "65°C" },
      { name: "Supplier name", value: "Marine Fuels Pte Ltd" }
    ],
    example: "Образец заполнения: The Bunker Delivery Note is issued by the fuel supplier and signed by the Chief Engineer. A fuel sample is sealed and attached to the BDN."
  },
  {
    id: "oil_record_book",
    title: "📓 Oil Record Book",
    desc: "Журнал нефтяных операций — обязательный документ по MARPOL",
    purpose: "Регистрирует все операции с нефтью: бункеровка, перекачка, сброс льяльных вод, сдача на берег. Проверяется Port State Control.",
    fields: [
      { name: "Part I — Machinery space operations", value: "Бункеровка, перекачка, сброс льяльных вод" },
      { name: "Part II — Cargo/ballast operations", value: "Только для танкеров" },
      { name: "Code A", value: "Ballasting of fuel oil tanks" },
      { name: "Code B", value: "Cleaning of fuel oil tanks" },
      { name: "Code C", value: "Collection and disposal of oil residues" },
      { name: "Code D", value: "Non-automatic discharge overboard" },
      { name: "Code E", value: "Automatic discharge overboard" },
      { name: "Code F", value: "Condition of oil discharge monitoring" },
      { name: "Code G", value: "Accidental discharge" },
      { name: "Code H", value: "Bunkering of fuel oil" }
    ],
    example: "Пример записи: «15.03.2025 14:30 Bunkering of 500 MT of IFO 380 in Singapore. All valves checked, no leaks. Chief Engineer signature.»"
  },
  {
    id: "logbook",
    title: "📔 Ship's Logbook",
    desc: "Судовой (вахтенный) журнал — основной документ хода судна",
    purpose: "Хранит записи обо всех событиях на судне: погода, курс, скорость, операции, аварии, учения.",
    fields: [
      { name: "Date/Time", value: "01.04.2025 08:00" },
      { name: "Position", value: "45°32'N 030°15'W" },
      { name: "Course", value: "270°" },
      { name: "Speed", value: "14.2 knots" },
      { name: "Weather", value: "Wind NE 5, sea state 3" },
      { name: "Remarks", value: "Engine running normally" }
    ],
    example: "Пример записи: «08:00 Watch changed. 3rd Engineer handed over the watch to 4th Engineer. Main engine full ahead.»"
  },
  {
    id: "checklist",
    title: "✅ Checklist (контрольный список)",
    desc: "Списки проверок для каждой операции — часть SMS",
    purpose: "Помогает не забыть важные шаги. Обязательны по ISM Code.",
    fields: [
      { name: "Pre-arrival checklist", value: "Перед приходом в порт" },
      { name: "Pre-departure checklist", value: "Перед выходом из порта" },
      { name: "Bunkering checklist", value: "Перед бункеровкой" },
      { name: "Hot work checklist", value: "Перед огневыми работами" },
      { name: "Enclosed space entry checklist", value: "Перед входом в замкнутое пространство" },
      { name: "Emergency checklist", value: "При аварийной ситуации" }
    ],
    example: "Пример: Bunkering checklist включает 25 пунктов: проверить связь, готовность сорбентов, состояние шлангов, показания танков и т.д."
  },
  {
    id: "permit",
    title: "📋 Work Permit (разрешение на работу)",
    desc: "Обязательное разрешение перед опасными работами",
    purpose: "Убедиться, что работа безопасна. Выдаётся ответственным лицом (Master или Chief Engineer).",
    fields: [
      { name: "Hot Work Permit", value: "Для сварки, резки, шлифовки" },
      { name: "Enclosed Space Entry Permit", value: "Для входа в танки, коффердамы" },
      { name: "Electrical Work Permit", value: "Для работ под напряжением" },
      { name: "Working Aloft Permit", value: "Для работы на высоте" },
      { name: "Working Outboard Permit", value: "Для работы за бортом" },
      { name: "Cold Work Permit", value: "Для работ, не создающих искр" }
    ],
    example: "Пример заполнения Hot Work Permit: указать место работы, тип работы, ответственного, меры безопасности, время начала и окончания. Действует не более одной вахты."
  },
  {
    id: "certificates",
    title: "📜 Ship Certificates (судовые сертификаты)",
    desc: "Обязательные сертификаты на борту судна",
    purpose: "Подтверждают соответствие судна международным конвенциям. Проверяются PSC при каждой инспекции.",
    fields: [
      { name: "Safety Management Certificate (SMC)", value: "По ISM Code, действует 5 лет" },
      { name: "Document of Compliance (DOC)", value: "Для компании, 5 лет" },
      { name: "Cargo Ship Safety Equipment", value: "По SOLAS, до 5 лет" },
      { name: "Cargo Ship Safety Construction", value: "По SOLAS, до 5 лет" },
      { name: "International Oil Pollution Prevention (IOPP)", value: "По MARPOL, до 5 лет" },
      { name: "International Load Line Certificate", value: "5 лет" },
      { name: "Minimum Safe Manning Document", value: "Бессрочно" },
      { name: "Medical Certificates of crew", value: "Максимум 2 года" }
    ],
    example: "Пример: при инспекции PSC инспектор проверяет срок действия всех сертификатов. Просроченный сертификат — основание для задержания судна."
  }
];

// =====================================================
// ЧАСТЬ 8: СИМУЛЯТОР ДВИГАТЕЛЯ (данные о деталях)
// =====================================================
const ENGINE_PARTS = {
  piston: {
    name: "Piston",
    ru: "Поршень",
    transcription: "[ˈpɪstən]",
    description: "Движется вверх и вниз внутри цилиндра. Передаёт энергию сгорания топлива на коленчатый вал через шатун.",
    x: 100, y: 60, w: 40, h: 50
  },
  cylinder: {
    name: "Cylinder Liner",
    ru: "Втулка цилиндра",
    transcription: "[ˈsɪlɪndə ˈlaɪnə]",
    description: "Внутренняя поверхность, в которой движется поршень. Изнашивается со временем и требует замены.",
    x: 90, y: 50, w: 60, h: 70
  },
  cylinder_head: {
    name: "Cylinder Head",
    ru: "Головка цилиндра",
    transcription: "[ˈsɪlɪndə hed]",
    description: "Закрывает цилиндр сверху. В ней находятся впускные и выпускные клапаны, форсунка.",
    x: 85, y: 30, w: 70, h: 25
  },
  connecting_rod: {
    name: "Connecting Rod",
    ru: "Шатун",
    transcription: "[kəˈnektɪŋ rɒd]",
    description: "Соединяет поршень с коленчатым валом. Преобразует возвратно-поступательное движение во вращательное.",
    x: 110, y: 115, w: 20, h: 50
  },
  crankshaft: {
    name: "Crankshaft",
    ru: "Коленчатый вал",
    transcription: "[ˈkræŋkʃɑːft]",
    description: "Преобразует движение шатуна во вращательное движение. Передаёт крутящий момент на гребной винт.",
    x: 70, y: 170, w: 100, h: 25
  },
  fuel_injector: {
    name: "Fuel Injector",
    ru: "Топливная форсунка",
    transcription: "[ˈfjuːəl ɪnˈdʒektə]",
    description: "Впрыскивает топливо в камеру сгорания в нужный момент. Требует регулярной проверки.",
    x: 105, y: 15, w: 30, h: 20
  },
  inlet_valve: {
    name: "Inlet Valve",
    ru: "Впускной клапан",
    transcription: "[ˈɪnlet vælv]",
    description: "Открывается во время такта впуска, чтобы пустить воздух в цилиндр.",
    x: 88, y: 20, w: 15, h: 15
  },
  exhaust_valve: {
    name: "Exhaust Valve",
    ru: "Выпускной клапан",
    transcription: "[ɪɡˈzɔːst vælv]",
    description: "Открывается во время такта выпуска, чтобы вышли отработавшие газы.",
    x: 140, y: 20, w: 15, h: 15
  },
  camshaft: {
    name: "Camshaft",
    ru: "Распредвал",
    transcription: "[ˈkæmʃɑːft]",
    description: "Управляет открытием и закрытием клапанов через кулачки.",
    x: 60, y: 200, w: 80, h: 15
  },
  flywheel: {
    name: "Flywheel",
    ru: "Маховик",
    transcription: "[ˈflaɪwiːl]",
    description: "Хранит кинетическую энергию, обеспечивая плавное вращение вала.",
    x: 175, y: 165, w: 25, h: 40
  },
  turbocharger: {
    name: "Turbocharger",
    ru: "Турбокомпрессор",
    transcription: "[ˈtɜːbəʊtʃɑːdʒə]",
    description: "Использует энергию выхлопных газов для сжатия впускного воздуха, повышая мощность двигателя.",
    x: 195, y: 100, w: 35, h: 35
  },
  bedplate: {
    name: "Bedplate",
    ru: "Фундаментная плита",
    transcription: "[ˈbedpleɪt]",
    description: "Основание двигателя. Крепится к корпусу судна, воспринимает вибрации.",
    x: 55, y: 195, w: 150, h: 20
  }
};

// =====================================================
// ЧАСТЬ 9: READING COMPREHENSION — 7 текстов из мануалов
// =====================================================

// Словарь технических терминов для tooltip (перевод при наведении)
const TERMS = {
  // Общие термины
  "crankshaft": "коленчатый вал",
  "deflection": "прогиб",
  "dial gauge": "индикатор часового типа",
  "crank web": "щека коленвала",
  "journal": "шейка вала",
  "main bearing": "коренной подшипник",
  "flywheel": "маховик",
  "alignment": "центровка",
  "tolerance": "допуск",
  "deviation": "отклонение",
  "clearance": "зазор",
  "torque": "крутящий момент",
  "wrench": "ключ",
  "spanner": "гаечный ключ",
  "tightening": "затяжка",
  "loosening": "ослабление",
  "hydraulic": "гидравлический",
  "pump": "насос",
  "valve": "клапан",
  "piston": "поршень",
  "cylinder": "цилиндр",
  "liner": "втулка",
  "injector": "форсунка",
  "nozzle": "сопло",
  "fuel oil": "топливо",
  "injection": "впрыск",
  "combustion": "сгорание",
  "exhaust": "выхлоп",
  "intake": "впуск",
  "turbocharger": "турбокомпрессор",
  "compressor": "компрессор",
  "turbine": "турбина",
  "blade": "лопатка",
  "rotor": "ротор",
  "bearing": "подшипник",
  "seal": "уплотнение",
  "gasket": "прокладка",
  "o-ring": "уплотнительное кольцо",
  "oil": "масло",
  "filter": "фильтр",
  "separator": "сепаратор",
  "cooler": "охладитель",
  "cooling water": "охлаждающая вода",
  "fresh water": "пресная вода",
  "sea water": "забортная вода",
  "temperature": "температура",
  "pressure": "давление",
  "rpm": "об/мин",
  "engine": "двигатель",
  "diesel": "дизель",
  "crankcase": "картер",
  "explosion": "взрыв",
  "relief valve": "предохранительный клапан",
  "flame arrester": "пламегаситель",
  "overhaul": "капитальный ремонт",
  "maintenance": "обслуживание",
  "inspection": "осмотр",
  "procedure": "процедура",
  "instruction": "инструкция",
  "manual": "руководство",
  "measurement": "измерение",
  "reading": "показание",
  "record": "запись",
  "log book": "вахтенный журнал",
  "safety": "безопасность",
  "warning": "предупреждение",
  "caution": "внимание",
  "danger": "опасность",
  "operator": "оператор",
  "engineer": "механик",
  "chief engineer": "старший механик",
  "second engineer": "второй механик",
  "third engineer": "третий механик",
  "crew": "экипаж",
  "vessel": "судно",
  "ship": "корабль",
  "engine room": "машинное отделение",
  "crank angle": "угол поворота коленвала",
  "top dead center": "верхняя мёртвая точка",
  "TDC": "ВМТ",
  "BTDC": "до ВМТ",
  "thrust plate": "упорная пластина",
  "shim": "прокладка",
  "injection timing": "момент впрыска",
  "fuel pump": "топливный насос",
  "plunger": "плунжер",
  "barrel": "гильза",
  "delivery valve": "нагнетательный клапан",
  "atomization": "распыление",
  "spray pattern": "форма факела",
  "heat exchanger": "теплообменник",
  "plate": "пластина",
  "gasket": "прокладка",
  "frame": "рама",
  "tie bolt": "стяжной болт",
  "cover": "крышка",
  "water": "вода",
  "flow": "поток",
  "leakage": "утечка",
  "clogging": "засорение",
  "cleaning": "очистка",
  "rinsing": "промывка",
  "detergent": "моющее средство",
  "scale": "накипь",
  "corrosion": "коррозия",
  "air starter": "воздушный стартер",
  "starting": "запуск",
  "pinion": "шестерня",
  "gear": "шестерня",
  "solenoid": "соленоид",
  "relay": "реле",
  "centrifugal": "центробежный",
  "rotor": "ротор",
  "sludge": "шлам",
  "bowl": "чаша",
  "bush": "втулка",
  "spindle": "шпиндель",
  "nozzle": "сопло",
  "feed": "подача"
};

// 7 текстов для чтения (из мануалов, адаптированы и сокращены)
const READING_TEXTS = [
  {
    id: "crankshaft_deflection",
    title: "Crankshaft Deflection Measurement",
    description: "How to measure and evaluate the deflection of the crankshaft",
    topic: "Maintenance",
    text: `Crankshaft deflection measurement is one of the most important checks during engine maintenance. It shows whether the engine foundation is in good condition and whether the main bearings are worn.

To measure the deflection, mount a dial gauge between two crank webs of the last cylinder nearest to the flywheel. The dial gauge should be installed carefully, and its temperature should be the same as the engine temperature. The measurement should always be carried out when the engine is cold.

Rotate the crankshaft to measuring position one and set the dial gauge to zero. Then rotate the crankshaft and read the values of the dial gauge at measuring positions two to five. Record only the deviation from the zero setting.

Evaluate the readings. The reading at measuring position five should be nearly the same as the reading at measuring position one. If the difference is too large, repeat the measurement. The vertical deflection is calculated as T minus the average of X and Y. The horizontal deflection is calculated as P minus S.

If the vertical and horizontal deflections exceed the permissible limits, the engine and the driven machinery should be realigned. Before realigning, the main bearing metals should be checked for abnormal wear. Be sure to contact the engine manufacturer for realigning.

After realigning the crankshaft, repeat steps one to five to confirm that the deflection is now within the acceptable range.`,
    questions: [
      {
        q: "When should crankshaft deflection be measured?",
        options: [
          "When the engine is hot and running",
          "When the engine is cold",
          "When the engine is at half load",
          "When the engine is warming up"
        ],
        correct: 1
      },
      {
        q: "What instrument is used for crankshaft deflection measurement?",
        options: [
          "A micrometer caliper",
          "A dial gauge",
          "A feeler gauge",
          "A torque wrench"
        ],
        correct: 1
      },
      {
        q: "Where is the dial gauge mounted?",
        options: [
          "Between two crank webs of the last cylinder",
          "On the top of the cylinder head",
          "Under the main bearing cap",
          "Inside the crankcase door"
        ],
        correct: 0
      },
      {
        q: "What does excessive deflection mean?",
        options: [
          "The engine needs new fuel oil",
          "The cooling system is leaking",
          "The engine and driven machinery need realignment",
          "The turbocharger is damaged"
        ],
        correct: 2
      },
      {
        q: "Who should be contacted for realignment?",
        options: [
          "The port authority",
          "The fuel supplier",
          "The engine manufacturer",
          "The classification society"
        ],
        correct: 2
      }
    ]
  },

  {
    id: "fuel_injection_timing",
    title: "Fuel Injection Timing",
    description: "Checking and adjusting the fuel injection timing",
    topic: "Fuel System",
    text: `Fuel injection timing is very important for engine performance. It influences the maximum cylinder pressure, fuel consumption, and NOx emissions. The injection timing is set by the engine maker and normally should not be adjusted. However, if a new fuel injection pump has been installed, or if the deviation of cylinder pressure is out of tolerance, the injection timing should be checked.

To check the injection timing, close the ball valves in the fuel supply and return lines. Remove the plug from the end block to drain the fuel oil inside the pipe. Dismantle two deflectors from the fuel injection pump and remove the remaining fuel with compressed air.

Use a mirror to see inside one deflector hole, and give a light into the opposite hole. Turn the crankshaft in the engine rotating direction until the light is cut out by the lifting plunger. Stop the crankshaft just after the light is cut and mark the flywheel scale with the indicator.

Count the deviation crank angle between the mark and the cylinder TDC. If it is ten degrees, the injection timing is BTDC ten degrees. If all cylinders' fuel injection timing is needed, read them in firing order.

The injection timing can be adjusted by changing the thickness of the thrust plate. Adding a thrust plate advances the timing and increases the maximum cylinder pressure. Thrust plate thickness plus zero point one millimeter equals cylinder pressure plus two bar.`,
    questions: [
      {
        q: "What does fuel injection timing influence?",
        options: [
          "Only the fuel consumption",
          "Maximum cylinder pressure, fuel consumption, and NOx emissions",
          "Only the cooling water temperature",
          "Only the turbocharger speed"
        ],
        correct: 1
      },
      {
        q: "Normally, should the injection timing be adjusted?",
        options: [
          "Yes, every week",
          "Yes, after every voyage",
          "No, it is set by the engine maker",
          "Yes, if the fuel brand changes"
        ],
        correct: 2
      },
      {
        q: "What is used to see inside the deflector hole?",
        options: [
          "A camera",
          "A mirror and a light",
          "A microscope",
          "A torch with a long cable"
        ],
        correct: 1
      },
      {
        q: "How much does adding a thrust plate of 0.1 mm increase cylinder pressure?",
        options: [
          "0.5 bar",
          "1 bar",
          "2 bar",
          "5 bar"
        ],
        correct: 2
      },
      {
        q: "What happens when a thrust plate is added?",
        options: [
          "The injection timing is retarded",
          "The injection timing is advanced",
          "The injection timing stays the same",
          "The injection is stopped"
        ],
        correct: 1
      }
    ]
  },

  {
    id: "turbocharger_cleaning",
    title: "Turbocharger Cleaning",
    description: "Wet cleaning of compressor and turbine during operation",
    topic: "Turbocharger",
    text: `During operation, the compressor of the turbocharger may accumulate deposits of dirt. Therefore the compressor should be cleaned while in operation by water injection at regular intervals. The deposits are removed mechanically by the impact of the water droplets.

The combustion of heavy fuel oil in diesel engines causes contamination of turbine blades and nozzle rings of the turbocharger. The results are low turbine efficiency, increased exhaust gas temperature, higher charging and firing pressures, and lower engine output. Therefore wet cleaning of the turbine blades and nozzle rings should be done at regular intervals.

To clean the compressor, unscrew the plug in the side cover of the water container. Fill the water container with cleaning water and screw the plug. Open the valve in the air pipe for about ten seconds. Close the valves in the air pipe after cleaning the compressor side. Water cleaning should be done at as high a load as possible. Higher load makes a better cleaning effect.

To clean the turbine, connect the fresh water line. Only clean fresh water without cleaning agents or solvents should be used. The water pressure before the turbine casing must be at least one point five bar above the turbine inlet pressure. If this condition cannot be met, the engine output must be reduced.

The turbine components should be cleaned approximately every two hundred operating hours. The recommended temperature range for the washing water is twenty to forty degrees Celsius.`,
    questions: [
      {
        q: "Why should the compressor of the turbocharger be cleaned?",
        options: [
          "To increase the fuel consumption",
          "Because it accumulates deposits of dirt",
          "To reduce the water consumption",
          "To slow down the engine"
        ],
        correct: 1
      },
      {
        q: "What happens if the turbine blades are contaminated?",
        options: [
          "Turbine efficiency increases",
          "Exhaust gas temperature decreases",
          "Engine output is reduced",
          "Fuel consumption is reduced"
        ],
        correct: 2
      },
      {
        q: "At what load should compressor cleaning be done?",
        options: [
          "At idle speed",
          "At as high a load as possible",
          "At half load",
          "Only at full stop"
        ],
        correct: 1
      },
      {
        q: "What water should be used for turbine cleaning?",
        options: [
          "Sea water",
          "Water mixed with solvent",
          "Clean fresh water",
          "Water with cleaning agents"
        ],
        correct: 2
      },
      {
        q: "How often should the turbine be cleaned?",
        options: [
          "Every 24 hours",
          "Every 200 operating hours",
          "Every 1000 operating hours",
          "Once a year"
        ],
        correct: 1
      }
    ]
  },

  {
    id: "plate_heat_exchanger",
    title: "Plate Heat Exchanger Maintenance",
    description: "Cleaning and assembling a plate heat exchanger",
    topic: "Cooling System",
    text: `A plate heat exchanger is a device that transfers heat from one medium to another through a series of thin metal plates. The plates are pressed together in a frame between a fixed cover and a movable cover. Each plate has a large surface area, so the heat exchanger can transfer much heat with high efficiency.

Each plate is equipped with an elastomeric gasket. The gaskets are glued or clipped on the plates. They seal the fluids from the atmosphere and prevent mixing between the two media. The gaskets are the most critical part for proper operation.

During operation, the plates can become fouled with scale or organic deposits. Increased pressure drop or falling outlet temperatures indicate that the plates are dirty. If this happens, the plate heat exchanger should be cleaned.

To clean the heat exchanger, first close the inlet and outlet valves and drain the unit. Wait until the temperature is below thirty-five degrees Celsius. Then loosen the tie bolts and move the movable cover backward. Remove the plates one by one and clean them with a soft brush and a suitable detergent. Do not use metal brushes, as they can damage the plates.

After cleaning, rinse the plates with clean water. Then assemble them back in the same order. Tighten the tie bolts diagonally. The tightening size must match the value given on the nameplate. Do not tighten the plate pack more than the minimum specified value.`,
    questions: [
      {
        q: "How is heat transferred in a plate heat exchanger?",
        options: [
          "Through thick metal walls",
          "Through a series of thin metal plates",
          "Through a hot liquid bath",
          "Through a rotating drum"
        ],
        correct: 1
      },
      {
        q: "What is the main function of the gaskets?",
        options: [
          "To increase the pressure drop",
          "To hold the frame together",
          "To prevent mixing between two media and seal from atmosphere",
          "To filter the cooling water"
        ],
        correct: 2
      },
      {
        q: "What indicates that the plates are dirty?",
        options: [
          "Decreased pressure drop and higher temperature",
          "Increased pressure drop and falling temperature",
          "No change in operation",
          "Increased water flow"
        ],
        correct: 1
      },
      {
        q: "What temperature should the unit be before opening?",
        options: [
          "Below 35 degrees Celsius",
          "Below 80 degrees Celsius",
          "Below 100 degrees Celsius",
          "Any temperature is fine"
        ],
        correct: 0
      },
      {
        q: "What should NOT be used for cleaning plates?",
        options: [
          "A soft brush",
          "A suitable detergent",
          "Clean water",
          "A metal brush"
        ],
        correct: 3
      }
    ]
  },

  {
    id: "air_starter",
    title: "Air Starter Operation",
    description: "How to install and operate an air starter",
    topic: "Starting System",
    text: `An air starter is a turbine engine that uses compressed air to rotate the engine crankshaft during starting. The ASM07 air starter is suitable for diesel engines up to seventy liters and gasoline engines up to ninety-eight liters. It is designed for engines with a mounting pad size of SAE one, two, or three.

The air starter should be installed by a technician trained by the manufacturer. Before attaching the starter to the engine, apply grease around the pinion gear. Connect all bolts and devices properly. Install control and supply air lines from the tank, and an air piloted relay valve and a solenoid for the ignition system.

The air pressure at the inlet should not exceed ten point three bar in any case. A pressure gauge should be attached to check the inlet pressure. The operation pressure in the inlet should never be higher than the value indicated on the starter screen.

Do not engage the starter while the engine is running. Re-engaging or pre-engaging a turbine starter during rotation may cause damage to the ring gear of the engine or to the pinion of the starter.

The ASM07 starter has a coast-down feature. After the start button is released, the turbine continues to rotate until the speed decreases from free-fall speed to zero. When using a starter with a pinion retracted, stop the crankshaft for thirty seconds before re-engaging. This delay is necessary to prevent damage.`,
    questions: [
      {
        q: "What is an air starter?",
        options: [
          "An electric motor for starting",
          "A turbine engine that uses compressed air",
          "A manual hand pump",
          "A hydraulic pump"
        ],
        correct: 1
      },
      {
        q: "What should be applied around the pinion gear before attaching the starter?",
        options: [
          "Water",
          "Fuel oil",
          "Grease",
          "Compressed air"
        ],
        correct: 2
      },
      {
        q: "What is the maximum allowed inlet air pressure?",
        options: [
          "5 bar",
          "7 bar",
          "10.3 bar",
          "20 bar"
        ],
        correct: 2
      },
      {
        q: "What should you NOT do with a starter?",
        options: [
          "Test it before installation",
          "Engage it while the engine is running",
          "Install a pressure gauge",
          "Grease the pinion gear"
        ],
        correct: 1
      },
      {
        q: "Why should the crankshaft be stopped for 30 seconds before re-engaging?",
        options: [
          "To save fuel",
          "To cool the starter",
          "To prevent damage to the starter and engine",
          "To check the oil level"
        ],
        correct: 2
      }
    ]
  },

  {
    id: "centrifugal_filter",
    title: "Centrifugal Oil Filter",
    description: "Cleaning and maintenance of a centrifugal by-pass filter",
    topic: "Lubricating System",
    text: `A centrifugal filter is a by-pass filter mounted directly at the engine base frame. It is a supplement to the main lubricating oil filter. During service, a part of the lubricating oil supplied from the engine-driven lubricating oil pump enters the centrifugal filter and returns to the oil sump in the base frame.

The centrifugal filter relies on centrifugal force and can therefore remove high-density, sub-micron particles from the lubricating oil. Oil enters the case of the filter and depresses the shuttle valve. Then oil travels up the center of the spindle and enters the rotor tube. Oil fills the rotor tube completely and travels through the separation cone into the rotor.

Oil leaves under pressure through two diametrically opposed tangential nozzles in the bottom of the rotor. The reaction of oil leaving the nozzles provides the driving force causing the rotor to spin around the spindle at high speed. The centrifugal force field within the spinning rotor forces the contaminants to travel to the inner wall of the rotor, where they form a dense rubber-like sludge which is easily removed.

To clean the filter, first isolate the filter by closing the valve for lubricating oil inlet. Ensure the centrifugal filter has come to a complete stop before proceeding. Slacken the V-band clamp and remove the rotor base cover. After oil is drained from the nozzles, remove the rotor assembly. Clean the rotor components carefully using a suitable cleaning liquid. Ensure that all rotor components are perfectly cleaned and free from debris before reassembly.`,
    questions: [
      {
        q: "What type of filter is a centrifugal filter?",
        options: [
          "A main filter",
          "A by-pass filter",
          "A fuel filter",
          "A water filter"
        ],
        correct: 1
      },
      {
        q: "What force does the centrifugal filter rely on?",
        options: [
          "Gravity force",
          "Magnetic force",
          "Centrifugal force",
          "Elastic force"
        ],
        correct: 2
      },
      {
        q: "Where do the contaminants form sludge?",
        options: [
          "On the outer surface of the rotor",
          "In the nozzles",
          "On the inner wall of the rotor",
          "In the shuttle valve"
        ],
        correct: 2
      },
      {
        q: "What should be done first before cleaning?",
        options: [
          "Open the drain valve",
          "Isolate the filter and wait for complete stop",
          "Remove the V-band clamp",
          "Start the engine"
        ],
        correct: 1
      },
      {
        q: "What is used to remove the rotor base cover?",
        options: [
          "A screwdriver",
          "A hammer",
          "A V-band clamp loosening",
          "A hydraulic jack"
        ],
        correct: 2
      }
    ]
  },

  {
    id: "engine_stop_system",
    title: "Engine Stop System",
    description: "How the engine stop system works",
    topic: "Control System",
    text: `The engine is stopped fundamentally when the fuel injection into the combustion chamber is stopped. This means that the rack of each fuel injection pump is moved to stop position by a stop signal. Every fuel rack is connected to a common control shaft mechanically and also connected to a common compressed air line pneumatically.

There are two ways of moving fuel racks to stop position. The first is by mechanical stop, which pulls the racks to stop position by the governor or the manual control lever. The STOP button activates the governor to be in STOP position. The second is by pneumatic stop using compressed air, which pushes the rack to stop position regardless of the governor control.

The EMERGENCY STOP button or AUTO STOP signals activate the stop solenoid valve to supply compressed air for all fuel injection pumps. This EMERGENCY STOP signal also activates the governor's stop simultaneously.

However, these two ways are mechanically independent from each other, and the spring-loaded levers provide mechanical flexibility between them. This ensures that even if one system fails, the other can still stop the engine.

The engine is also equipped with an overspeed shutdown device. This device is completely independent of the engine control system. It protects the engine from runaway, which could cause personal injury, loss of life, or property damage. The overspeed shutdown device is set to activate at 113 percent of the rated speed in the first stage, and at 115 percent in the second stage.`,
    questions: [
      {
        q: "What happens when the fuel injection stops?",
        options: [
          "The engine runs faster",
          "The engine is stopped",
          "The turbocharger starts",
          "The cooling system activates"
        ],
        correct: 1
      },
      {
        q: "How many ways are there to move the fuel racks to stop position?",
        options: [
          "Only one way",
          "Two ways: mechanical and pneumatic",
          "Three ways",
          "Four ways"
        ],
        correct: 1
      },
      {
        q: "What does the EMERGENCY STOP button activate?",
        options: [
          "The starter motor",
          "The fuel injection pump",
          "The stop solenoid valve for compressed air",
          "The cooling water pump"
        ],
        correct: 2
      },
      {
        q: "What is the overspeed shutdown device set to?",
        options: [
          "100% of rated speed",
          "105% of rated speed",
          "113% and 115% of rated speed",
          "150% of rated speed"
        ],
        correct: 2
      },
      {
        q: "Why is the overspeed shutdown device important?",
        options: [
          "It saves fuel",
          "It increases engine power",
          "It prevents engine damage and personal injury",
          "It cleans the engine"
        ],
        correct: 2
      }
    ]
  }
];

// =====================================================
// ЧАСТЬ 10: EMERGENCY SCENARIOS — английская версия
// =====================================================

// ВНИМАНИЕ: этот блок ЗАМЕНЯЕТ старый массив EMERGENCIES (на русском).
// Если в вашем data.js уже есть переменная EMERGENCIES — не создавайте
// новую, а замените содержимое существующей. Иначе эта версия перезапишет старую.
window.EMERGENCIES = [
  {
    id: "fire_engine",
    title: "🔥 Fire in the Engine Room",
    desc: "Fire breaks out near the fuel pump",
    steps: [
      { text: "Detect the fire and notify the captain via intercom", ok: true },
      { text: "Activate the fire alarm by pressing the button", ok: true },
      { text: "Stop the fuel pumps and shut off the fuel supply", ok: true },
      { text: "Open all windows and doors to ventilate the space", ok: false, why: "Adding oxygen will make the fire stronger!" },
      { text: "Try to extinguish the fire with a foam extinguisher", ok: true },
      { text: "Evacuate all personnel from the engine room", ok: true },
      { text: "Use the CO2 system if the fire cannot be extinguished in 5 minutes", ok: true },
      { text: "Take off your life jacket so it does not interfere", ok: false, why: "You must PUT ON the life jacket, not take it off!" }
    ]
  },
  {
    id: "man_overboard",
    title: "🚨 Man Overboard",
    desc: "A crewmember falls overboard",
    steps: [
      { text: "Shout 'Man overboard!' and point to the side", ok: true },
      { text: "Throw a lifebuoy with a self-igniting light", ok: true },
      { text: "Notify the bridge immediately", ok: true },
      { text: "Reduce speed to dead slow", ok: true },
      { text: "Lower the rescue boat", ok: true },
      { text: "Continue at full speed to call for help faster", ok: false, why: "Speed must be reduced so the rescue boat is not lost!" },
      { text: "Record the time of the fall and the position", ok: true },
      { text: "Make a radio announcement (Mayday relay)", ok: true }
    ]
  },
  {
    id: "flooding",
    title: "🌊 Flooding",
    desc: "A hole in the hull allows water to enter the hold",
    steps: [
      { text: "Notify the bridge and the captain immediately", ok: true },
      { text: "Identify the location of the hole and the rate of water entry", ok: true },
      { text: "Close all watertight doors", ok: true },
      { text: "Start the bilge pumps", ok: true },
      { text: "Open all valves so the water can drain itself", ok: false, why: "This will only increase the water entry!" },
      { text: "Use a cement box or plug for temporary repair", ok: true },
      { text: "Pump out the water and monitor the ship's stability", ok: true },
      { text: "Send a distress signal if the situation cannot be controlled", ok: true }
    ]
  },
  {
    id: "collision",
    title: "💥 Collision",
    desc: "Collision with another vessel",
    steps: [
      { text: "Stop the main engine if necessary", ok: true },
      { text: "Assess the damage of both vessels", ok: true },
      { text: "Exchange information with the other vessel by VHF", ok: true },
      { text: "Leave as quickly as possible without giving any assistance", ok: false, why: "By maritime law, you MUST offer assistance!" },
      { text: "Notify the nearest port and the shipowner", ok: true },
      { text: "Close watertight doors in the damaged compartments", ok: true },
      { text: "Check for injured persons and provide first aid", ok: true },
      { text: "Record the position, time, and circumstances for the report", ok: true }
    ]
  },
  {
    id: "grounding",
    title: "⚓ Grounding",
    desc: "The vessel runs aground near the shore",
    steps: [
      { text: "Stop the main engine", ok: true },
      { text: "Check the depth around the vessel (echo sounder, lead line)", ok: true },
      { text: "Determine whether there is a hole and water entry", ok: true },
      { text: "Give full speed astern to get off the ground", ok: false, why: "You must assess the damage first! Going astern may make it worse." },
      { text: "Sound the alarm and muster the crew at the stations", ok: true },
      { text: "Transfer ballast or fuel to change the trim", ok: true },
      { text: "Notify the nearest port and request assistance", ok: true },
      { text: "Continuously monitor the water level in the holds", ok: true }
    ]
  },
  {
    id: "blackout",
    title: "⚡ Total Blackout",
    desc: "All generators stopped",
    steps: [
      { text: "The emergency generator should start automatically", ok: true },
      { text: "Check the operation of the emergency generator", ok: true },
      { text: "Notify the bridge of the situation", ok: true },
      { text: "Check the cause of the protection trip", ok: true },
      { text: "Start the diesel generator manually", ok: true },
      { text: "Leave all running equipment switched on", ok: false, why: "When the generator starts, a heavy load may cause another blackout!" },
      { text: "Gradually add load after starting", ok: true },
      { text: "Check the condition of the main engine", ok: true }
    ]
  },
  {
    id: "oil_spill",
    title: "🛢️ Oil Spill",
    desc: "Fuel leaks into the sea during bunkering",
    steps: [
      { text: "Stop all fuel operations immediately", ok: true },
      { text: "Close the valves on the manifold", ok: true },
      { text: "Notify the bunker barge and port authorities", ok: true },
      { text: "Wash the deck with sea water overboard", ok: false, why: "Washing oil into the sea is prohibited – it will increase pollution!" },
      { text: "Use sorbents and booms", ok: true },
      { text: "Collect the spilled oil in special containers", ok: true },
      { text: "Record the incident in the Oil Record Book", ok: true },
      { text: "Notify the shipowner and P&I club", ok: true }
    ]
  },
  {
    id: "steering_failure",
    title: "🎯 Steering Gear Failure",
    desc: "Failure of the main steering gear",
    steps: [
      { text: "Notify the bridge immediately", ok: true },
      { text: "Switch to the emergency steering gear", ok: true },
      { text: "Reduce speed for better manoeuvrability", ok: true },
      { text: "Continue at full speed", ok: false, why: "At full speed without steering the ship is uncontrollable!" },
      { text: "Display 'Not Under Command' signals/lights", ok: true },
      { text: "Call a tug if required", ok: true },
      { text: "Identify the cause of the failure", ok: true },
      { text: "Notify the port and the shipowner", ok: true }
    ]
  },

  // ==== НОВЫЕ СЦЕНАРИИ ====
  {
    id: "crankcase_explosion",
    title: "💣 Crankcase Explosion",
    desc: "Oil mist explosion in the crankcase",
    steps: [
      { text: "The crankcase relief valve opens automatically", ok: true },
      { text: "Reduce engine speed immediately", ok: true },
      { text: "Stop the engine and engage the turning gear", ok: true },
      { text: "Open the crankcase doors immediately to inspect", ok: false, why: "NEVER open crankcase doors immediately! Air can enter and cause a second explosion!" },
      { text: "Notify the bridge and the chief engineer", ok: true },
      { text: "Wait at least 30 minutes before opening the crankcase", ok: true },
      { text: "Check the oil mist detector alarm history", ok: true },
      { text: "Inspect the crankshaft, bearings, and relief valves", ok: true }
    ]
  },
  {
    id: "fuel_leak_high_pressure",
    title: "⛽ High-Pressure Fuel Leak",
    desc: "Fuel leaks from the high-pressure pipe",
    steps: [
      { text: "Stop the engine or reduce speed immediately", ok: true },
      { text: "Close the fuel supply valve to the leaking pipe", ok: true },
      { text: "Put on safety goggles and heat-resistant gloves", ok: true },
      { text: "Tighten the leaking pipe fitting while the engine is running", ok: false, why: "NEVER tighten a high-pressure fuel pipe while the engine is running! Fuel jet can penetrate the skin!" },
      { text: "Place an oil absorbent and a container under the leak", ok: true },
      { text: "Clean up the spilled fuel and dispose of it properly", ok: true },
      { text: "Record the incident in the engine logbook", ok: true },
      { text: "Replace the damaged pipe or fitting before restarting", ok: true }
    ]
  }
];

console.log("✅ Reading texts loaded: " + READING_TEXTS.length);
console.log("✅ Emergency scenarios (EN): " + window.EMERGENCIES.length);
console.log("✅ Technical terms for tooltip: " + Object.keys(TERMS).length);