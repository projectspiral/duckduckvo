# Exit if any errors occur
set -e

if [ -z $1 ]; then
  echo "Please enter an directory to deploy to.";
  exit 1;
fi

if [ ! -d $1 ]; then
  echo "$1 is not a directory.";
  exit 1;
fi

gitdir=$(realpath $(dirname $0));
targetdir=$(realpath $1);

echo "Deploying to: $(realpath $1)";

# Make sure that we are in our own directory to execute git commands
cd $gitdir;

git checkout master
git pull

cp -r images/ scripts/ style/ *.html $targetdir
