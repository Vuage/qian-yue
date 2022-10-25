# 請勿手動更改此 branch

## 為什麼不能更改

此 branch 需要通過手動編譯，並且 push上傳就會自動跑 CI/CD，請勿手動修改文件，除了 CNAME或其他 github 設定必須文件或 ```.workflow``` 外，其餘請勿修改。

## 如何自動生成
切換回 [main](https://github.com/Vuage/qian-yue/tree/main)分支，並且通過底下的提示進行編譯，編譯成 ```dist/``` 資料夾後將此資料夾，push 至 [gh_pages](https://github.com/Vuage/qian-yue/tree/gh_pages)分支，Github就會自動部屬網頁。

## 可以修改之文件
```diff
+ .workflow/ => 可以手動修改
+ CNAME = > 可以手動修改
+ *.yml => 可以手動修改
- .git/ => 可以交由 git 命令修改
- .env* => 可以至 settings/secret 修改 (請注意！本檔案不允許上傳至 Github)