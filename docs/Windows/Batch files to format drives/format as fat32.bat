diskpart

list disk
select disk X
clean
create part pri
select part 1

format fs=FAT32 quick
active
exit