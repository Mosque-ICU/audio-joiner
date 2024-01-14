1. Open the file `surah.js` in your preferred code editor.

2. Locate the line:

   ```javascript
   fetchSurahData(2, "en.walk");
   ```

3. Replace the `2` with the desired Surah number, and replace `"en.walk"` with the corresponding uid from the `Available.md` file.

4. Open a terminal in the folder containing `surah.js` (you can use `Ctrl+Shift+P` or `Cmd+Shift+P` and type "Terminal: Open New Terminal").

5. Run the app by typing:

   ```bash
   node surah.js
   ```

6. After running the app, it should generate an audio file named `joined.mp3`.

7. Write a README file with relevant information, such as the purpose of the app and usage instructions. You can include the steps mentioned above for clarity.

Here's a basic README template:

````markdown
# Surah Audio Generator

This script fetches metadata and generates an audio file for a specified Surah.

## Usage

1. Open `surah.js` in your code editor.
2. Edit the line:
   ```javascript
   fetchSurahData(SURAH_NUMBER, "UID_FROM_Available.md");
   ```
````

Replace `SURAH_NUMBER` with the desired Surah number and `"UID_FROM_Available.md"` with the corresponding uid. 3. Open a terminal in the folder. 4. Run the app:

```bash
node surah.js
```

5. The generated audio file will be named `joined.mp3`.

## UIDs

Find the UIDs for each Surah in the `Available.md` file.

## Example

```javascript
fetchSurahData(1, "uid123");
```

Feel free to customize this README with additional information.

```

```
