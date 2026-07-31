#!/bin/bash

# 1. Ask you what message you want for the commit
echo "📝 Enter your commit message:"
read commit_message

# 2. If you leave it blank, assign a default timestamp message
if [ -z "$commit_message" ]; then
    commit_message="site update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 3. Add all your modified and new files
echo "🚀 Staging files..."
git add .

# 4. Commit the staged changes
echo "💾 Committing changes..."
git commit -m "$commit_message"

# 5. Push directly to your remote source branch
echo "📡 Pushing updates upstream..."
git push origin source

echo "✅ Done! GitHub Actions is now compiling your site."

