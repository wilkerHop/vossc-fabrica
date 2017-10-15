if test $0 -n
then
git add . && git commit -m'$0' && git push origin master
else
git add . && git commit -m'alterações...' && git push origin master
fi
