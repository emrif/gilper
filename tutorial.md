1. **Create a New Branch**(if your already have a Branch skip this)

   ```bash
   git checkout -b (your Branch)
   ```

2. **Save Your Changes**

   ```bash
   git add .
   git commit -m "(your commit)"
   git push origin (your Branch)
   ```

3. **Get Updates from `devbranch`**

   ```bash
   git pull --no-rebase origin devbranch or npm run pull
   ```

4. **If There Are Conflicts**

   - Fix conflicts in files (look for `<<<<<<<`, `=======`, `>>>>>>>`).

   - Save, then run:

     ```bash
     git add .
     git commit -m "resolved conflicts"
     ```

5. **Push Final Changes**

   ```bash
   git push origin (your Branch)
   ```

Done!

Next, go to:

1. Select your branch.  
   ![](https://s2.loli.net/2024/11/28/RV4l8mnOs6rF2zH.png)

2. Open a pull request.  
   ![](https://s2.loli.net/2024/11/28/UCuNc7ljD9HiIvY.png)

3. Select the target branch (`devbranch`, **not `main`**).  
   ![](https://s2.loli.net/2024/11/28/pgnfGIXJetF5kUh.png)

4. Click the "Create Pull Request" button.  
   ![Image showing the "Create Pull Request" button](https://s2.loli.net/2024/11/28/j4XA7G3oVkaHMey.png)

5. Once the pull request is reviewed, click "Merge pull request"

![](https://s2.loli.net/2024/11/28/arHZCRFD6bwc4LX.png)
