import { joinAudio } from "./mp3.js";

// Array to store metadata objects
let surahMetadata;

// Function to fetch and process surah data
async function fetchSurahData(surahNumber, uid) {
  try {
    const response = await fetch(`https://api.alquran.cloud/v1/quran/${uid}`);
    const data = await response.json();

    // Extract relevant data from the response
    const surahData = data.data.surahs[surahNumber - 1];

    // Create metadata object
    const metadata = {
      number: surahData.number,
      name: surahData.englishName,
      translation: surahData.englishNameTranslation,
      revelationType: surahData.revelationType,
      audio: surahData.ayahs.map((ayah) => ayah.audio),
    };

    // Add metadata object to the array
    surahMetadata = metadata;

    console.log(`Metadata for Surah ${surahNumber} fetched and added to the array.`);
  } catch (error) {
    console.error("Error fetching surah data:", error);
  }

  console.log(surahMetadata);
  console.log("Attempting to join audio");
  try {
    joinAudio(surahMetadata.audio);
  } catch (error) {
    console.error(error);
  }
}

// Example usage: Fetch metadata for Surah 1
fetchSurahData(1, "en.walk");
