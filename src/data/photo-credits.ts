// Car photos are from Wikimedia Commons. Their licences require crediting the author
// and licence wherever the photo appears; replace a photo and its entry together.
export interface PhotoCredit { author: string; license: string; licenseUrl: string; source: string }

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  "m340i": { author: "OWS Photography", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", source: "https://commons.wikimedia.org/wiki/File:BMW_M340i_(G20)_Washington_DC_Metro_Area,_USA_(1).jpg" },
  "carrera": { author: "Alexander Migl", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Porsche_992_Carrera_S_coupe_IMG_5832.jpg" },
  "g350": { author: "Tokumeigakarinoaoshima", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Black_Mercedes-Benz_G_350d_(W463)_front.jpg" },
  "c300d": { author: "M 93", license: "CC BY-SA 3.0 de", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en", source: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_C_300_d_AMG_Line_(W_206)_%E2%80%93_f_10032024.jpg" },
  "rs5": { author: "Alexander-93", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Audi_RS5_Sportback_5F_FL_IMG_8131.jpg" },
  "velar": { author: "Alexander-93", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Range_Rover_Velar_P250_SE_IMG_8831.jpg" },
  "530i": { author: "Dinkun Chen", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:BMW_530i_(G30)_China.jpg" },
  "macan": { author: "Alexander-93", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:2022_Porsche_Macan_S_1X7A0821.jpg" },
  "e300": { author: "Damian B Oh", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W213_E_300_4_matic_black_(1).jpg" },
  "718": { author: "MrWalkr", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:2022_Porsche_718_Cayman_GT4_yellow_SCD_24.jpg" },
  "urus": { author: "Alexander-93", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_S_1X7A6798.jpg" },
  "contgt": { author: "Alexandre Prevot from Nancy, France", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Bentley_Continental_GT_V8_(54912009824).jpg" },
  "ghost": { author: "Damian B Oh", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Rolls-Royce_Ghost_I_Series_II_Black_(16).jpg" },
  "maybach": { author: "Damian B Oh", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Mercedes-Maybach_Z223_S_580_Obsidian_Black_(26).jpg" },
  "rrlwb": { author: "Damian B Oh", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Land_Rover_Range_Rover_Autobiography_L_L460_Santorini_Black_(4).jpg" },
  "x7": { author: "Alexander-93", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:BMW_G07_(2022)_1X7A6991.jpg" },
  "roma": { author: "Alexander-93", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Ferrari_Roma_IMG_9620.jpg" },
  "rsq8": { author: "Vauxford", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:2020_Audi_RS_Q8_Front.jpg" },
  "m4": { author: "Alexander Migl", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:BMW_M4_(G82)_Competition_1X7A6103.jpg" },
  "cayenne": { author: "Alexander-93", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:2023_Porsche_Cayenne_Coup%C3%A9_S_1X7A1674.jpg" },
  "gt63": { author: "crash71100", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", source: "https://commons.wikimedia.org/wiki/File:Mercedes_AMG_GT_4_Doors_63_S_(48536796706).jpg" },
};
