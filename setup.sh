#!/bin/bash

echo "🚀 Setting up npm package template..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install it first:"
    echo "npm install -g pnpm"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Set up git hooks
echo "🔧 Setting up git hooks..."
pnpm prepare

# Create initial changeset
echo "📝 Creating initial changeset..."
echo "---
\"@my-lib/core\": minor
\"@my-lib/react\": minor
\"@my-lib/vanilla\": minor
---

Initial release of the modular library template with core utilities, React components, and vanilla TypeScript components.
" > .changeset/initial-release.md

echo "✅ Setup complete!"
echo ""
echo "🎉 Your npm package template is ready to use!"
echo ""
echo "📦 Package Structure:"
echo "  - @my-lib/core     - Environment-agnostic utilities and types"
echo "  - @my-lib/react    - React-specific components and hooks (ESM)"
echo "  - @my-lib/vanilla  - Vanilla TypeScript components and hooks (UMD)"
echo ""
echo "🚀 Next steps:"
echo "1. Update package.json files with your package details"
echo "2. Rename '@my-lib/*' to your actual package names"
echo "3. Start developing: pnpm dev"
echo "4. Run tests: pnpm test"
echo "5. Build: pnpm build"
echo ""
echo "📖 Example Apps:"
echo "  - React: cd examples/react-app && pnpm dev"
echo "  - Vanilla: cd examples/vanilla-app && pnpm dev"
echo ""
echo "For more information, see README.md" 