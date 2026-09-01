window.BENCHMARK_DATA = {
  "lastUpdate": 1788241273079,
  "repoUrl": "https://github.com/shunk031/dotfiles",
  "entries": {
    "MacOS benchmark": [
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a097ba43d1cdf7d6397b4f117796e01ebd91434",
          "message": "Benchmarking for installing/loading zsh (#62)\n\n* add `benchmark.sh`\r\n\r\n* add directory\r\n\r\n* update workflow\r\n\r\n* update benchmark script\r\n\r\n* update workflow\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* install gtime at mac\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* move `benchmark.sh` to `scripts/`\r\n\r\n* remove benchmarks directory\r\n\r\n* update\r\n\r\n* Revert \"move `benchmark.sh` to `scripts/`\"\r\n\r\nThis reverts commit 156b45f8692601cb7131a3d81e67d7a144738dc7.\r\n\r\n* Revert \"remove benchmarks directory\"\r\n\r\nThis reverts commit 0ceae08bd93798ff39c9d4dfc2fc19bcba6aae4d.\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update the workflow\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update README.md\r\n\r\n* add .gitignore\r\n\r\n* update README.md",
          "timestamp": "2023-02-18T15:43:10+09:00",
          "tree_id": "9c0077d8c5b7252e19253882025e4dd7d5abb43d",
          "url": "https://github.com/shunk031/dotfiles/commit/5a097ba43d1cdf7d6397b4f117796e01ebd91434"
        },
        "date": 1676702802412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.619,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.89,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1284c8270768146c937869a8341bf11e751fe899",
          "message": "Introduce `kcov` and `codecov` (#150)\n\n* introduce kcov and codecov\r\n\r\n* install kcov\r\n\r\n* update README.md\r\n\r\n* update gitignore\r\n\r\n* update README.md\r\n\r\n* update README.md\r\n\r\n* update README.md\r\n\r\n* update the workflow\r\n\r\n* update workflow",
          "timestamp": "2023-02-18T18:50:46+09:00",
          "tree_id": "c6da015532b862ab6ab97cd8f74ebc8312687855",
          "url": "https://github.com/shunk031/dotfiles/commit/1284c8270768146c937869a8341bf11e751fe899"
        },
        "date": 1676714060194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.603,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.85,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e2f10f972cde12b0051744fb918d2aefbc6cb4f",
          "message": "update tests (#151)\n\n* update tests\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update test.yaml\r\n\r\n* update\r\n\r\n* install bats from the package managers\r\n\r\n* update\r\n\r\n* update to remove duplicated tests\r\n\r\n* update tests for macos\r\n\r\n* comment out for debug\r\n\r\n* update tpm.sh\r\n\r\n* fix tests\r\n\r\n* fix tests\r\n\r\n* update tests\r\n\r\n* update workflow\r\n\r\n* use `source` instead of `load`\r\n\r\n* fix tests\r\n\r\n* update workflow\r\n\r\n* update\r\n\r\n* update test.yaml\r\n\r\n* update test for mas\r\n\r\n* update tests\r\n\r\n* update\r\n\r\n* update workflow\r\n\r\n* trying to fix a bug that causes coverage to be empty\r\n\r\n* use codecov script instead of the action\r\n\r\n* update workflow\r\n\r\n* update workflow\r\n\r\n* update Dockerfile\r\n\r\n* update README",
          "timestamp": "2023-02-20T00:03:00+09:00",
          "tree_id": "a78b4f1348b25bf33f18f5b30593158dd9f52b01",
          "url": "https://github.com/shunk031/dotfiles/commit/5e2f10f972cde12b0051744fb918d2aefbc6cb4f"
        },
        "date": 1676819187683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.651,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.3,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d75b16d9c438a1311f8bdbef6d337b6c07c8ab8",
          "message": "update scripts (#152)\n\n* update scripts\r\n\r\n* update for `mac_app_store.sh`\r\n\r\n* fix for iterm2\r\n\r\n* update `~/.git/config`\r\n\r\n* add `setup-python-env` function",
          "timestamp": "2023-02-24T21:27:26+09:00",
          "tree_id": "42a42add81fa4d9973a7627b15e8cb41a58f9ea5",
          "url": "https://github.com/shunk031/dotfiles/commit/9d75b16d9c438a1311f8bdbef6d337b6c07c8ab8"
        },
        "date": 1677241835501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.689,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.88,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69eda745cfa743c07b479b7f56095430117f92fd",
          "message": "update for using annyconnect (#153)",
          "timestamp": "2023-02-24T22:32:42+09:00",
          "tree_id": "755948dd1d09da3c13eef328d96606e9d8066b4e",
          "url": "https://github.com/shunk031/dotfiles/commit/69eda745cfa743c07b479b7f56095430117f92fd"
        },
        "date": 1677246257028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.642,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.1,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a77d11b0a16dbccffa27f76d7f47f919a3422af7",
          "message": "update config for gpg agent (#157)",
          "timestamp": "2023-02-25T15:46:51+09:00",
          "tree_id": "408f31c9848a1b9bc9cf6d6384e9d06586495b69",
          "url": "https://github.com/shunk031/dotfiles/commit/a77d11b0a16dbccffa27f76d7f47f919a3422af7"
        },
        "date": 1677307812703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.728,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.94,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74c067226d09fa47c9cb4b1610485a19621d79ea",
          "message": "update for zsh functions (#156)",
          "timestamp": "2023-02-25T15:47:35+09:00",
          "tree_id": "1f2216e281eb4097addcdd5afb11ed7cef9e6d15",
          "url": "https://github.com/shunk031/dotfiles/commit/74c067226d09fa47c9cb4b1610485a19621d79ea"
        },
        "date": 1677307905264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.604,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.79,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec57a9a663a4536f6eefde9006d57d0251b0a7fa",
          "message": "add `git-open` (#154)",
          "timestamp": "2023-02-25T16:13:19+09:00",
          "tree_id": "76bd0b2e003342781e766682fa441991385204d5",
          "url": "https://github.com/shunk031/dotfiles/commit/ec57a9a663a4536f6eefde9006d57d0251b0a7fa"
        },
        "date": 1677309455299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.634,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.87,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51d400b398978a490dda9782fae4371bc5533dc5",
          "message": "update for server (#155)\n\n* update for server\r\n\r\n* update chezmoiignore for server\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update for exa\r\n\r\n* update\r\n\r\n* update for age\r\n\r\n* remove exa from chezmoiexternal and add the installation to the misc.sh\r\n\r\n* update tests\r\n\r\n* update\r\n\r\n* update tests\r\n\r\n* update",
          "timestamp": "2023-02-25T18:12:23+09:00",
          "tree_id": "0e222bcc25c46ead92bb42d6aca52b9630bee891",
          "url": "https://github.com/shunk031/dotfiles/commit/51d400b398978a490dda9782fae4371bc5533dc5"
        },
        "date": 1677316550114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.703,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ceffa50a13d811a949d42d0365364c0b96ffc31c",
          "message": "Update for server (#158)\n\n* add PATH for rust & cargo\r\n\r\n* update for .bashrc\r\n\r\n* update",
          "timestamp": "2023-02-27T14:07:22+09:00",
          "tree_id": "9264552d193a99092086db6d00e4a6a1e78fab75",
          "url": "https://github.com/shunk031/dotfiles/commit/ceffa50a13d811a949d42d0365364c0b96ffc31c"
        },
        "date": 1677474809727,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.713,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 11.91,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13852d833e776de3f33f43ff71ec730a197c69a8",
          "message": "disable the floating screenshot thumbnail (#159)",
          "timestamp": "2023-02-27T15:19:58+09:00",
          "tree_id": "f66bf3e5765555e01de1e1fe65211e4a4fcce9b2",
          "url": "https://github.com/shunk031/dotfiles/commit/13852d833e776de3f33f43ff71ec730a197c69a8"
        },
        "date": 1677479183762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.625,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.22,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5aca1f612d609382f94572d4d5ef5e72f96cda9",
          "message": "Revert \"Update for server (#158)\" (#160)\n\nThis reverts commit ceffa50a13d811a949d42d0365364c0b96ffc31c.",
          "timestamp": "2023-02-27T22:09:09+09:00",
          "tree_id": "71647240749dc2ee2dbeea6eec103f1b9cae83bf",
          "url": "https://github.com/shunk031/dotfiles/commit/c5aca1f612d609382f94572d4d5ef5e72f96cda9"
        },
        "date": 1677503553879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.635,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9db866563ef980060bfa656c85b686fd86f5df53",
          "message": "update `.bashrc` (#162)",
          "timestamp": "2023-02-27T22:17:19+09:00",
          "tree_id": "79de7eadfb60bb563573241b9bbafc579cc73409",
          "url": "https://github.com/shunk031/dotfiles/commit/9db866563ef980060bfa656c85b686fd86f5df53"
        },
        "date": 1677504255901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.658,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.87,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bc74691e78c0c6cb55ce586a4f69a9810bc8642",
          "message": "update CI settings for the tests (#163)\n\n* update CI settings for the tests\r\n\r\n* update test",
          "timestamp": "2023-03-13T22:25:37+09:00",
          "tree_id": "e83301562f7327932b6cb6546b3dc77d8cb3d8d9",
          "url": "https://github.com/shunk031/dotfiles/commit/4bc74691e78c0c6cb55ce586a4f69a9810bc8642"
        },
        "date": 1678714203583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.594,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 4.16,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d336d1b8cb632275780be92ccec508fa2f9ee10a",
          "message": "Update scripts for repository (#164)\n\n* move `benchmark.sh` to `scripts/benchmarks`\r\n\r\n* remove bnchmarks directory\r\n\r\n* change the path of the `benchmark.sh`\r\n\r\n* rename filename\r\n\r\n* change the path of benchmark.sh\r\n\r\n* update test\r\n\r\n* update run_benchmark.sh\r\n\r\n* update run_benchmark.sh\r\n\r\n* update for tests",
          "timestamp": "2023-03-17T20:22:57+09:00",
          "tree_id": "5f8d4172e4b73bdfdb4b50f2c12bdcccb0152e30",
          "url": "https://github.com/shunk031/dotfiles/commit/d336d1b8cb632275780be92ccec508fa2f9ee10a"
        },
        "date": 1679052579732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.667,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.94,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7faf4f2fd8e0f9ee41fb403775c19293dfd85c88",
          "message": "download `autocvd-go` (#165)",
          "timestamp": "2023-03-27T10:15:55+09:00",
          "tree_id": "dd565b2d7f639c8e05dd9da87164fa0f2149cede",
          "url": "https://github.com/shunk031/dotfiles/commit/7faf4f2fd8e0f9ee41fb403775c19293dfd85c88"
        },
        "date": 1679880109745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.561,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.49,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b6b20ad6f18e3badaa32875d77ec323ed718cf8",
          "message": "add `colima-start` command (#167)",
          "timestamp": "2023-04-03T21:08:06+09:00",
          "tree_id": "c82da0e53d77f181b768923e6e58741c51551249",
          "url": "https://github.com/shunk031/dotfiles/commit/4b6b20ad6f18e3badaa32875d77ec323ed718cf8"
        },
        "date": 1680523941192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.591,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.7,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28f18952ba5e3afc818df1ca12e80d13f1ffd6cb",
          "message": "Update `setup.sh` (#169)\n\n* update setup.sh\r\n\r\n* update `brew.sh`",
          "timestamp": "2023-04-07T18:17:11+09:00",
          "tree_id": "1557ee4bc1d8ffebd111a33b9a806bd2ee8bc558",
          "url": "https://github.com/shunk031/dotfiles/commit/28f18952ba5e3afc818df1ca12e80d13f1ffd6cb"
        },
        "date": 1680859247851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.573,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.64,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5136ee25aaac4f0cbde7e72bc133889e1665766e",
          "message": "disable bell for iTerm2 (#172)",
          "timestamp": "2023-04-21T17:49:36+09:00",
          "tree_id": "ee3f2bc5c84aa8952664b1b9b06797856e4b08db",
          "url": "https://github.com/shunk031/dotfiles/commit/5136ee25aaac4f0cbde7e72bc133889e1665766e"
        },
        "date": 1682067237299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.628,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.79,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0637d2df8bc0129eaaa4a3a1e778c985861b0f08",
          "message": "update test for MacOS's defaults (#175)",
          "timestamp": "2023-04-23T22:42:39+09:00",
          "tree_id": "ced4f60993eebc731fc4bc1a614b73e91b41e8d5",
          "url": "https://github.com/shunk031/dotfiles/commit/0637d2df8bc0129eaaa4a3a1e778c985861b0f08"
        },
        "date": 1682257631223,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.582,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.7,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29eef65991f120e497ce4d511b6089e88cd3e5dc",
          "message": "Install ngrok (#174)\n\n* install ngrok\r\n\r\n* install ngrok through brew cask",
          "timestamp": "2023-04-23T22:42:22+09:00",
          "tree_id": "87c3ab1b3cd3086ed2cba198a0e87ad52edfa263",
          "url": "https://github.com/shunk031/dotfiles/commit/29eef65991f120e497ce4d511b6089e88cd3e5dc"
        },
        "date": 1682257687803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.557,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.52,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a01bda59bc3badc0f2069fd3e3b68f0f8e203f75",
          "message": "fix URL for downloading the fonts (#177)",
          "timestamp": "2023-05-21T19:58:21+09:00",
          "tree_id": "d8114c04134bf566ab8e032b38403f9c0133525a",
          "url": "https://github.com/shunk031/dotfiles/commit/a01bda59bc3badc0f2069fd3e3b68f0f8e203f75"
        },
        "date": 1684666936736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.56,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.59,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b08480d83fe54f44f54fe5f730fb5bd0d80aeced",
          "message": "update config for iTerm2 (#178)",
          "timestamp": "2023-05-23T20:52:02+09:00",
          "tree_id": "f1bde32322126ab379deb138815980f33b3ddee7",
          "url": "https://github.com/shunk031/dotfiles/commit/b08480d83fe54f44f54fe5f730fb5bd0d80aeced"
        },
        "date": 1684842977416,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.56,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.87,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b848d96a959e42c80d0daab3afe69ef3bde86717",
          "message": "add files for connecting VPN (#179)",
          "timestamp": "2023-05-24T09:57:09+09:00",
          "tree_id": "57226befaf73e56049510f94d6bc249e6a38bb1e",
          "url": "https://github.com/shunk031/dotfiles/commit/b848d96a959e42c80d0daab3afe69ef3bde86717"
        },
        "date": 1684890108713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 1.151,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 23.33,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b848d96a959e42c80d0daab3afe69ef3bde86717",
          "message": "add files for connecting VPN (#179)",
          "timestamp": "2023-05-24T09:57:09+09:00",
          "tree_id": "57226befaf73e56049510f94d6bc249e6a38bb1e",
          "url": "https://github.com/shunk031/dotfiles/commit/b848d96a959e42c80d0daab3afe69ef3bde86717"
        },
        "date": 1684890482587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 1.359,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 15.03,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2af5023c766b3e0183ac29abf3dc1c8fde88355",
          "message": "update Nerd font (#180)",
          "timestamp": "2023-05-29T10:23:05+09:00",
          "tree_id": "1ec4d5d85703c44996e14f3f54681888f7167c34",
          "url": "https://github.com/shunk031/dotfiles/commit/e2af5023c766b3e0183ac29abf3dc1c8fde88355"
        },
        "date": 1685323636993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 1.37,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 6.77,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efae14d240ce78627dae9211c9fade548d40b379",
          "message": "change font from HackNerdFontCompleteM-Regular to HackNFM-Regular (#182)",
          "timestamp": "2023-06-04T22:14:20+09:00",
          "tree_id": "b4f0fde2b70ce7f006fb9ec2016546f78b515a26",
          "url": "https://github.com/shunk031/dotfiles/commit/efae14d240ce78627dae9211c9fade548d40b379"
        },
        "date": 1685884706364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.645,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.98,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3eeaa8f20a4c4c75a4a85d58ca8685c65d95f66d",
          "message": "clone `.work` as external (#181)\n\n* add `.private_dotfiles`\r\n\r\n* update setup.sh\r\n\r\n* Revert \"update setup.sh\"\r\n\r\nThis reverts commit 4f6012e93056d8fa414c19e15c4f70644ed820db.\r\n\r\n* Revert \"add `.private_dotfiles`\"\r\n\r\nThis reverts commit 2dfab9a8bab97d983e8b6796228ab570f8d039b4.\r\n\r\n* update external\r\n\r\n* update\r\n\r\n* add setting\r\n\r\n* change the directory name\r\n\r\n* load config for work",
          "timestamp": "2023-06-09T09:05:23+09:00",
          "tree_id": "cc48969e47cd99f0aa7892427be79896a51bc8fb",
          "url": "https://github.com/shunk031/dotfiles/commit/3eeaa8f20a4c4c75a4a85d58ca8685c65d95f66d"
        },
        "date": 1686269352971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.62,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.67,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51701512eb1386702abc963989676243c92d1185",
          "message": "Revert \"add files for connecting VPN (#179)\" (#183)\n\nThis reverts commit b848d96a959e42c80d0daab3afe69ef3bde86717.",
          "timestamp": "2023-06-10T00:47:57+09:00",
          "tree_id": "caef8a319c0c7cc4b73a13e4a93a86c1742c155d",
          "url": "https://github.com/shunk031/dotfiles/commit/51701512eb1386702abc963989676243c92d1185"
        },
        "date": 1686325966771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.837,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.72,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "095941bb23b23b395e844f1bf08380970014acd0",
          "message": "update tmux.conf for macos (#184)",
          "timestamp": "2023-06-13T09:57:40+09:00",
          "tree_id": "4390c4eeae45fd7028080c3c8d1357e1ae5f2bc5",
          "url": "https://github.com/shunk031/dotfiles/commit/095941bb23b23b395e844f1bf08380970014acd0"
        },
        "date": 1686618119236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.609,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.79,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4910b275192665b244a8520a38f10526b6a20409",
          "message": "add `login-ghcr` command (#185)\n\n* add `login-ghcr` command\r\n\r\n* update\r\n\r\n* add `--platform` option",
          "timestamp": "2023-06-15T17:44:44+09:00",
          "tree_id": "fd051a52ef1413608c7ca72453e43b54d237d7d8",
          "url": "https://github.com/shunk031/dotfiles/commit/4910b275192665b244a8520a38f10526b6a20409"
        },
        "date": 1686819072348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.713,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 25.93,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4cc2390916f7ced8d929e62f8812c6b32efba19",
          "message": "install the private dotfiles at MacOS (#186)",
          "timestamp": "2023-06-26T11:56:41+09:00",
          "tree_id": "778642a19d845bd63887d0c660cdb47826f6c829",
          "url": "https://github.com/shunk031/dotfiles/commit/a4cc2390916f7ced8d929e62f8812c6b32efba19"
        },
        "date": 1687748644029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.681,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.95,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbf8d3ed6863e156a585c9c387a34578c406a100",
          "message": "Update for server (#187)\n\n* comment out of installing rust.sh\r\n\r\n* download exa using chezmoi external mechanism\r\n\r\n* update to remove test for the exa command",
          "timestamp": "2023-07-11T15:18:59+09:00",
          "tree_id": "6d331f67930ed7c4bdc3ebbc4c008cd80404718d",
          "url": "https://github.com/shunk031/dotfiles/commit/dbf8d3ed6863e156a585c9c387a34578c406a100"
        },
        "date": 1689056602998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.638,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 6.22,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bcfeefb6ae42a25abae92b5cbcda1885b140a823",
          "message": "update for exa (#188)",
          "timestamp": "2023-07-12T11:34:16+09:00",
          "tree_id": "9551b6a9fb4f7ae2c76b32d6cb03a661fdbe289e",
          "url": "https://github.com/shunk031/dotfiles/commit/bcfeefb6ae42a25abae92b5cbcda1885b140a823"
        },
        "date": 1689129705561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.746,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 30.7,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c6c26d711507ce7886631b127b6cd94f6c3d0ea",
          "message": "update setup.sh (#190)",
          "timestamp": "2023-07-28T22:49:26+09:00",
          "tree_id": "cbb2452f2c043fcba6874be1a0619fbeeb1ab92c",
          "url": "https://github.com/shunk031/dotfiles/commit/3c6c26d711507ce7886631b127b6cd94f6c3d0ea"
        },
        "date": 1690552425638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.575,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.51,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bd277d90900c86d463a3a072de9d0e4c615e8dd",
          "message": "Update binary installation (#192)\n\n* update for exa\r\n\r\n* update for age\r\n\r\n* update for exa\r\n\r\n* update for ghq\r\n\r\n* update for misc\r\n\r\n* remove unused line\r\n\r\n* update test\r\n\r\n* update",
          "timestamp": "2023-07-29T20:43:39+09:00",
          "tree_id": "c1c0271da62682702c3ed1bd458617933b8efaf2",
          "url": "https://github.com/shunk031/dotfiles/commit/3bd277d90900c86d463a3a072de9d0e4c615e8dd"
        },
        "date": 1690631251937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.543,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.53,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a43e23fe0aa81c34f74261bcdaf74ef35d4e8b9",
          "message": "change toml to yaml (#191)",
          "timestamp": "2023-07-29T20:59:35+09:00",
          "tree_id": "b825ef73df796c6548cb2086a57ea4e6af0b0601",
          "url": "https://github.com/shunk031/dotfiles/commit/2a43e23fe0aa81c34f74261bcdaf74ef35d4e8b9"
        },
        "date": 1690632219589,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.551,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.68,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd581bc4290cf6ac1bf4d8c33aec60bc99b8414a",
          "message": "update setup.sh (#193)",
          "timestamp": "2023-07-29T21:59:13+09:00",
          "tree_id": "2a0e99fec2a175fcfd1175ab1b2ef2bbf399c8a5",
          "url": "https://github.com/shunk031/dotfiles/commit/cd581bc4290cf6ac1bf4d8c33aec60bc99b8414a"
        },
        "date": 1690635826124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.573,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.6,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9f9f441852f5f175a1ee0d02d1d36d5ec91ec3a",
          "message": "remove some extenals (#195)",
          "timestamp": "2023-07-29T22:51:48+09:00",
          "tree_id": "6c859fc63e26b3b2cb0f5c92894cc3ea09dd4f8e",
          "url": "https://github.com/shunk031/dotfiles/commit/c9f9f441852f5f175a1ee0d02d1d36d5ec91ec3a"
        },
        "date": 1690638968579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.553,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.69,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "229b925e9d49fe5a5c4c42140d60cb357513a882",
          "message": "update for fzf (#194)",
          "timestamp": "2023-07-29T23:16:40+09:00",
          "tree_id": "0d0f9df04ee2b180923cc330722952eae95d7e01",
          "url": "https://github.com/shunk031/dotfiles/commit/229b925e9d49fe5a5c4c42140d60cb357513a882"
        },
        "date": 1690640478224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.607,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.82,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47841c1b870b71cf312295f604c742526a196ef7",
          "message": "update global gitignore (#197)",
          "timestamp": "2023-07-30T00:51:46+09:00",
          "tree_id": "b425abdbafa38921c300924842e862f8cb8820c8",
          "url": "https://github.com/shunk031/dotfiles/commit/47841c1b870b71cf312295f604c742526a196ef7"
        },
        "date": 1690646181828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.676,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.92,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16ac23f38e7ee85e17583bbeb1f17a59139cc95d",
          "message": "add chezmoi scripts for exa (#199)",
          "timestamp": "2023-08-06T22:00:54+09:00",
          "tree_id": "c2f75ac8f060eee2dd462ec6a0e273eb53433127",
          "url": "https://github.com/shunk031/dotfiles/commit/16ac23f38e7ee85e17583bbeb1f17a59139cc95d"
        },
        "date": 1691327096318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.604,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.94,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e52582d725483b7460d32cc0fa02a958b72c7c88",
          "message": "add config for ai2-tango (#200)",
          "timestamp": "2023-08-10T20:33:18+09:00",
          "tree_id": "c1dca797803665e650a8fccf0a29eac961342f73",
          "url": "https://github.com/shunk031/dotfiles/commit/e52582d725483b7460d32cc0fa02a958b72c7c88"
        },
        "date": 1691667538868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 1.503,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 59.63,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a26c59bd146c9702d1a4e471cd14abad56adafa",
          "message": "Use docker desktop (#198)\n\n* remove `colima-start` command\r\n\r\n* update Makefile to remove related to lima/colima\r\n\r\n* update scripts\r\n\r\n* update README",
          "timestamp": "2023-08-13T10:32:34+09:00",
          "tree_id": "3adeb4b3b29e7b4ec31d42b6c76c75ef910495d4",
          "url": "https://github.com/shunk031/dotfiles/commit/7a26c59bd146c9702d1a4e471cd14abad56adafa"
        },
        "date": 1691890821681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.622,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.1,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9aac5bb3dc8de389f22eebcd6d3b05baf2e83330",
          "message": "Update for rust based dotfiles (#202)\n\n* add scripts and tests for sheldon\r\n\r\n* add scripts and tests for starship\r\n\r\n* add plugins.toml for sheldon\r\n\r\n* add tmpl scripts\r\n\r\n* add scripts\r\n\r\n* update scripts\r\n\r\n* update\r\n\r\n* update\r\n\r\n* add comment\r\n\r\n* update scripts\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update scripts\r\n\r\n* update",
          "timestamp": "2023-08-13T15:12:09+09:00",
          "tree_id": "77bcf62d35d33bada21b67c041edd0afc6bee230",
          "url": "https://github.com/shunk031/dotfiles/commit/9aac5bb3dc8de389f22eebcd6d3b05baf2e83330"
        },
        "date": 1691907484303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.588,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.05,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcabcae9bd1e4c81eb90e8ebf64f1009a2690a8c",
          "message": "add `set expandtab` (#204)",
          "timestamp": "2023-08-19T00:40:47+09:00",
          "tree_id": "617e69ee9d6ef513b0bda130698dd9173fe43bf6",
          "url": "https://github.com/shunk031/dotfiles/commit/dcabcae9bd1e4c81eb90e8ebf64f1009a2690a8c"
        },
        "date": 1692374109996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 1.494,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 69.01,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f97cbb4d0ef401038aa8084f7adede809b43abe2",
          "message": "use personal access token (PAT) of GitHub if exists as env variable (#203)\n\n* use personal access token (PAT) of GitHub if exists as env variable\r\n\r\n* update for exa.sh\r\n\r\n* update for age.sh\r\n\r\n* update for age.sh",
          "timestamp": "2023-08-30T10:43:54+09:00",
          "tree_id": "3e398bae823090f2be354afdb582a9311f820430",
          "url": "https://github.com/shunk031/dotfiles/commit/f97cbb4d0ef401038aa8084f7adede809b43abe2"
        },
        "date": 1693360295066,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.569,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.84,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41b4571422293c33019b8ae428d0fc1c100be8ce",
          "message": "update actions/checkout to v4 (#212)",
          "timestamp": "2023-10-01T10:22:50+09:00",
          "tree_id": "e9ddc488054ebd56238233443b1e7922da9fc80a",
          "url": "https://github.com/shunk031/dotfiles/commit/41b4571422293c33019b8ae428d0fc1c100be8ce"
        },
        "date": 1696123776129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.647,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.2,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13ea4bfbc1b498dd5f0620681709f716d35e9926",
          "message": "rename template files (#210)",
          "timestamp": "2023-10-01T10:34:03+09:00",
          "tree_id": "14354539fde68425c6a5f5195e73b899d4afc30f",
          "url": "https://github.com/shunk031/dotfiles/commit/13ea4bfbc1b498dd5f0620681709f716d35e9926"
        },
        "date": 1696124415704,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.549,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.81,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "839083cef1d2f917b62d51b0e1c02103234a390d",
          "message": "remove unused actions/checkout in the CI workflow (#211)",
          "timestamp": "2023-10-01T11:29:08+09:00",
          "tree_id": "65ea6a690419ee0aa3b505b9899933384e7f9a84",
          "url": "https://github.com/shunk031/dotfiles/commit/839083cef1d2f917b62d51b0e1c02103234a390d"
        },
        "date": 1696127830618,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.599,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.97,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbd1ec41699a4f8ae877639ea2879a5fa2a2cb05",
          "message": "Create dependabot.yml (#214)",
          "timestamp": "2023-10-01T16:53:14+09:00",
          "tree_id": "bf9d965246386e1e0d32f99f5792f438164e94c9",
          "url": "https://github.com/shunk031/dotfiles/commit/cbd1ec41699a4f8ae877639ea2879a5fa2a2cb05"
        },
        "date": 1696147264613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.651,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.98,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a086417ce6a793a617e7fe395f9b7d42de2b2cf8",
          "message": "update for docker (#213)",
          "timestamp": "2023-10-01T18:51:29+09:00",
          "tree_id": "8cd85b6b452edfbb35d404fb214e3eebbdb3d5ef",
          "url": "https://github.com/shunk031/dotfiles/commit/a086417ce6a793a617e7fe395f9b7d42de2b2cf8"
        },
        "date": 1696154206117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.558,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.99,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "505c32ec64c28c6de1817f05e9c2d5163747651d",
          "message": "update `decrypt_age_private_key.sh` (#209)\n\n* update age.sh\r\n\r\n* rename chezmoi scripts",
          "timestamp": "2023-10-02T23:04:52+09:00",
          "tree_id": "6f11b3da096281d249bae69d7138302898fbec05",
          "url": "https://github.com/shunk031/dotfiles/commit/505c32ec64c28c6de1817f05e9c2d5163747651d"
        },
        "date": 1696255825798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.612,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 3.01,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4462d25603765539bb673cc5ad0d972749df019",
          "message": "update for zsh share history (#215)",
          "timestamp": "2024-01-18T17:27:22+09:00",
          "tree_id": "59cbc58d7fa4f90c04b7cc6b3ae65c4331fd4cc9",
          "url": "https://github.com/shunk031/dotfiles/commit/b4462d25603765539bb673cc5ad0d972749df019"
        },
        "date": 1705566751970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.289,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 1.67,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb8b067333c6f9b6d8d88641d2bc30e675fcebfa",
          "message": "use eza instead of exa (#207)\n\n* use eza instead of exa\r\n\r\n* update test",
          "timestamp": "2024-02-18T22:56:20+09:00",
          "tree_id": "dcd21c67a556020fbb21f9ffbfad704c0b73ed14",
          "url": "https://github.com/shunk031/dotfiles/commit/eb8b067333c6f9b6d8d88641d2bc30e675fcebfa"
        },
        "date": 1708264886417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.34,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.33,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d335a8ab34a7b72e0c520f0c1c398323c72f19d2",
          "message": "setup for timezone (#218)",
          "timestamp": "2024-02-18T23:08:25+09:00",
          "tree_id": "74ff37ecf9d7f26cd7dcd5f7b1c3932a5b731402",
          "url": "https://github.com/shunk031/dotfiles/commit/d335a8ab34a7b72e0c520f0c1c398323c72f19d2"
        },
        "date": 1708265781685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.466,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 2.44,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79f9651fc9e9e2f3f2b4c7d8dd0ce535764a34e8",
          "message": "use env (#220)",
          "timestamp": "2024-03-03T00:09:39+09:00",
          "tree_id": "3626786938f7b8fbbad9d3e9c63727cc29e32ab8",
          "url": "https://github.com/shunk031/dotfiles/commit/79f9651fc9e9e2f3f2b4c7d8dd0ce535764a34e8"
        },
        "date": 1709392604352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.874,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 53.69,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c9dd2c174080c16ce3ffef92c5daec94744a952",
          "message": "use M1 mac runner in CI (#219)\n\n* use M1 mac runner in CI\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update README\r\n\r\n* update",
          "timestamp": "2024-03-03T00:21:18+09:00",
          "tree_id": "e9a43a4a9834c2d074452c6b74576d6ad39c6b1d",
          "url": "https://github.com/shunk031/dotfiles/commit/3c9dd2c174080c16ce3ffef92c5daec94744a952"
        },
        "date": 1709393068472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.187,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.95,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79f9651fc9e9e2f3f2b4c7d8dd0ce535764a34e8",
          "message": "use env (#220)",
          "timestamp": "2024-03-03T00:09:39+09:00",
          "tree_id": "3626786938f7b8fbbad9d3e9c63727cc29e32ab8",
          "url": "https://github.com/shunk031/dotfiles/commit/79f9651fc9e9e2f3f2b4c7d8dd0ce535764a34e8"
        },
        "date": 1709393124971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.271,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 1.56,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62ac75c1259e13a431880413076b6320c00c82bc",
          "message": "update for ssh server (#222)",
          "timestamp": "2024-03-04T12:40:11+09:00",
          "tree_id": "b865b461ba8d30ea1279ec244c3aa80e4fe38deb",
          "url": "https://github.com/shunk031/dotfiles/commit/62ac75c1259e13a431880413076b6320c00c82bc"
        },
        "date": 1709523818662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.134,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.78,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84671b6e4c0171314b1770fbf055df402b42defb",
          "message": "update for eza and exa (#225)",
          "timestamp": "2024-03-06T10:11:25+09:00",
          "tree_id": "7cd9b49d717e5d35502506113eda2171dc2cd9e9",
          "url": "https://github.com/shunk031/dotfiles/commit/84671b6e4c0171314b1770fbf055df402b42defb"
        },
        "date": 1709687686407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.142,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.79,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa16dc6dae7f71b0a159da2b7be520382fbedb4a",
          "message": "rename `.yaml` to `.yaml.tmpl` (#224)",
          "timestamp": "2024-03-06T23:06:18+09:00",
          "tree_id": "5e76ec7b2a41da42dc4d9ff5e5f77c11877cd86b",
          "url": "https://github.com/shunk031/dotfiles/commit/fa16dc6dae7f71b0a159da2b7be520382fbedb4a"
        },
        "date": 1709734185474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.131,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.75,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "160a00aae95becbad74466df1c1208f41e3b760d",
          "message": "update for command history (#223)",
          "timestamp": "2024-04-28T01:30:03+09:00",
          "tree_id": "555d4810d4566529657a42eadc01301159026d61",
          "url": "https://github.com/shunk031/dotfiles/commit/160a00aae95becbad74466df1c1208f41e3b760d"
        },
        "date": 1714235581775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.133,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.74,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0f14988e3136435ed3a5f70320b7492b3027dab",
          "message": "add settings for jupyter lab (#227)\n\n* add settings for jupyter lab\r\n\r\n* rename settings for jupyterlab\r\n\r\n* ignore the jupyterlab settings\r\n\r\n* update",
          "timestamp": "2024-05-12T01:24:15+02:00",
          "tree_id": "e1de332d4f9c6a7365e096af9268fb22a95f2274",
          "url": "https://github.com/shunk031/dotfiles/commit/e0f14988e3136435ed3a5f70320b7492b3027dab"
        },
        "date": 1715470035433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.131,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.74,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e3fc5ff6b5308f125267e06ccae4cdd0c327b81",
          "message": "update for iTerm2 and chezmoiignore (#229)",
          "timestamp": "2024-05-12T01:37:33+02:00",
          "tree_id": "7515ad1ed61a4fe6a001898c30f4f5f411c8cbfd",
          "url": "https://github.com/shunk031/dotfiles/commit/9e3fc5ff6b5308f125267e06ccae4cdd0c327b81"
        },
        "date": 1715470846783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.183,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.95,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d730987b7ed36fc9ef8296cbf77182e5e517ed93",
          "message": "rename file for decrypting private key in Ubuntu (#228)",
          "timestamp": "2024-05-12T01:44:58+02:00",
          "tree_id": "aa4684bfed5de28e8446399eb240c4c042749568",
          "url": "https://github.com/shunk031/dotfiles/commit/d730987b7ed36fc9ef8296cbf77182e5e517ed93"
        },
        "date": 1715471292515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.132,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.75,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aedc22f5edfc290f303a6f49517374212af3ca62",
          "message": "Test for file existence (#233)\n\n* add tests\r\n\r\n* update files\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update",
          "timestamp": "2024-05-19T15:34:27+09:00",
          "tree_id": "447b7f317435b10a3f39ded1ed5d6ed40116edc3",
          "url": "https://github.com/shunk031/dotfiles/commit/aedc22f5edfc290f303a6f49517374212af3ca62"
        },
        "date": 1716100754496,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.299,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 1.27,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aedc22f5edfc290f303a6f49517374212af3ca62",
          "message": "Test for file existence (#233)\n\n* add tests\r\n\r\n* update files\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update",
          "timestamp": "2024-05-19T15:34:27+09:00",
          "tree_id": "447b7f317435b10a3f39ded1ed5d6ed40116edc3",
          "url": "https://github.com/shunk031/dotfiles/commit/aedc22f5edfc290f303a6f49517374212af3ca62"
        },
        "date": 1716101000521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.168,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.86,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1c65e6b6be5086c75ff7d59d37d9bceb1a2b9db",
          "message": "update for history (#234)",
          "timestamp": "2024-07-17T18:06:00+09:00",
          "tree_id": "81e646d78cf31b5df1fd2b1fd9098faeb688396e",
          "url": "https://github.com/shunk031/dotfiles/commit/e1c65e6b6be5086c75ff7d59d37d9bceb1a2b9db"
        },
        "date": 1721207337850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.13,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.81,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a38cbfcd4279dd56ac77bf434f617a4ce5ac4d4d",
          "message": "update to speedup pyenv-virtualenv prompt (#235)",
          "timestamp": "2024-07-17T18:13:16+09:00",
          "tree_id": "9b8cfa59e1120dda22af72eb6cdce0dd716fc237",
          "url": "https://github.com/shunk031/dotfiles/commit/a38cbfcd4279dd56ac77bf434f617a4ce5ac4d4d"
        },
        "date": 1721207774583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.137,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.8,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "386b37ec7e8889aa92e04be069c5e1eed4a36d4c",
          "message": "add `starship.toml` (#236)\n\n* add `starship.toml`\r\n\r\n* update `starship.sh`\r\n\r\n* update",
          "timestamp": "2024-08-19T22:10:31+09:00",
          "tree_id": "f398d2f37095873bbca21155a55e65200036f3d5",
          "url": "https://github.com/shunk031/dotfiles/commit/386b37ec7e8889aa92e04be069c5e1eed4a36d4c"
        },
        "date": 1724073227043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.155,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.83,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a342a985feb51715c9ad11a5631be3b2ffe5fd88",
          "message": "Use `git credential manager` in Ubuntu Server (#237)\n\n* use `git-credential-manager` in Ubuntu Server\r\n\r\n* add test",
          "timestamp": "2024-10-24T11:37:08+09:00",
          "tree_id": "8f14641cea9be1a96fc3e8ecd475fc76effed454",
          "url": "https://github.com/shunk031/dotfiles/commit/a342a985feb51715c9ad11a5631be3b2ffe5fd88"
        },
        "date": 1729737673440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.305,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 1.67,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c914d3b83a859911a4b30c6aed84104a3fd00b30",
          "message": "use `uv` instead of `pyenv` (#238)\n\n* remove `pyenv` related files and settings\r\n\r\n* move `rust.sh` from `~/.local/bin/server` to `~/.local/bin/common`\r\n\r\n* install `uv`\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update",
          "timestamp": "2024-11-05T15:35:13+09:00",
          "tree_id": "15250658c348f10fce35a75e7bb7d32770d8f24c",
          "url": "https://github.com/shunk031/dotfiles/commit/c914d3b83a859911a4b30c6aed84104a3fd00b30"
        },
        "date": 1730788682172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.06,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.71,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb0f39349d3eba2850568d895336f200c80f7ebf",
          "message": "update `symlink_hotkey_window.json.tmpl` (#240)",
          "timestamp": "2024-11-05T16:54:04+09:00",
          "tree_id": "57f675798a98092b293b3b19ee302b3c67115cd9",
          "url": "https://github.com/shunk031/dotfiles/commit/bb0f39349d3eba2850568d895336f200c80f7ebf"
        },
        "date": 1730793415451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.06,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.69,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "435c5a543a8c1aed542bdeceeb1e1c12083130ae",
          "message": "update `uv.bats` (#239)\n\n* update `uv.bats`\r\n\r\n* add sh.tmpl",
          "timestamp": "2024-11-05T16:54:20+09:00",
          "tree_id": "9945116030987103e48abcae9f42cf9bd69aa4f1",
          "url": "https://github.com/shunk031/dotfiles/commit/435c5a543a8c1aed542bdeceeb1e1c12083130ae"
        },
        "date": 1730793422674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.061,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.72,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5ccc49ecd0fd7c549ffb8bb82891ebc20fa94c3",
          "message": "update URL of uv-installer.sh (#241)",
          "timestamp": "2024-11-05T18:16:34+09:00",
          "tree_id": "ed292a660f5a687ae89259bba4af661fb2513a1e",
          "url": "https://github.com/shunk031/dotfiles/commit/f5ccc49ecd0fd7c549ffb8bb82891ebc20fa94c3"
        },
        "date": 1730798368703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.06,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.69,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1210c09d984079b34d5a77676bdf55e6a1753fb",
          "message": "Bump codecov/codecov-action from 4 to 5 (#242)\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 4 to 5.\r\n- [Release notes](https://github.com/codecov/codecov-action/releases)\r\n- [Changelog](https://github.com/codecov/codecov-action/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/codecov/codecov-action/compare/v4...v5)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: codecov/codecov-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-01T21:35:19+09:00",
          "tree_id": "f4c6f5379aabac308184e92f4d6e4a24d124768a",
          "url": "https://github.com/shunk031/dotfiles/commit/c1210c09d984079b34d5a77676bdf55e6a1753fb"
        },
        "date": 1733056710250,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.064,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.71,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "290113798798ea66d7d880eaa5e23877f4d66c48",
          "message": "disable rearrangement of mission control (#243)",
          "timestamp": "2025-01-10T20:13:08+09:00",
          "tree_id": "26d0432daa4974ff5bd3888a4390f84e7db730da",
          "url": "https://github.com/shunk031/dotfiles/commit/290113798798ea66d7d880eaa5e23877f4d66c48"
        },
        "date": 1736507767337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.062,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.78,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8dc1d923048b90790aed487feeb1c60ca5b50196",
          "message": "update for kcov (#244)\n\n* update for kcov\r\n\r\n* add test for kcov\r\n\r\n* update\r\n\r\n* update",
          "timestamp": "2025-01-16T16:58:02+09:00",
          "tree_id": "d07cd671dd7324df7ff69b335ef21ea226257387",
          "url": "https://github.com/shunk031/dotfiles/commit/8dc1d923048b90790aed487feeb1c60ca5b50196"
        },
        "date": 1737014479384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.068,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.84,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32b3d979b11d420e8cac78a129d58680b8b5cdd2",
          "message": "add aws-cli installation script and corresponding tests for Ubuntu (#246)\n\n* add aws_cli installation script and corresponding tests for Ubuntu\n\n* rename template for AWS CLI installation script on Ubuntu\n\n* update aws_cli installation script to include --update flag",
          "timestamp": "2025-05-20T14:13:12+09:00",
          "tree_id": "b3fca639cbece993ca7165df5611324d8216c6d2",
          "url": "https://github.com/shunk031/dotfiles/commit/32b3d979b11d420e8cac78a129d58680b8b5cdd2"
        },
        "date": 1747718206303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.062,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.7,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb40e7948ed93be63f22916787962a6a7e1d1262",
          "message": "fix: use DOTFILES_GITHUB_PAT for getting latest version of the nvm (#257)\n\n* fix: use DOTFILES_GITHUB_PAT for getting latest version of the nvm\n\n* fix: standardize environment variables across workflow files\n\n* fix: simplify nvm loading in test script\n\n* fix: comment out DOTFILES_DEBUG in macos workflow\n\n* fix: simplify chezmoi installation by removing redundant checks\n\n* fix: install chezmoi alongside gnu-time in benchmark workflow\n\n* fix: comment out debug flag in unit test script\n\n* fix: remove commented debug flag from macos and ubuntu test functions\n\n* fix: remove commented debug flag from run_unit_test.sh\n\n* fix: remove verbose flag from nvm uninstall function and update test for nvm installation\n\n* fix: comment out docker-compose check in macos docker test\n\n* fix: uncomment docker-compose check in macos docker test",
          "timestamp": "2025-06-27T00:51:29+09:00",
          "tree_id": "d33998dd6afd4cb9ff701398fa2602660d47b347",
          "url": "https://github.com/shunk031/dotfiles/commit/bb40e7948ed93be63f22916787962a6a7e1d1262"
        },
        "date": 1750953274132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.072,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.72,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7961505adff783d5390e4f27495c75e2ebbda2c",
          "message": "fix: test (#259)\n\n* fix: refactor iterm2 test to use local variable for config path\n\n* fix: comment out docker-compose check in docker test\n\n* fix: adjust iterm2 test for proper command execution and formatting\n\n* fix: clean up iterm2 test by removing commented code and ensuring proper teardown",
          "timestamp": "2025-06-27T01:22:34+09:00",
          "tree_id": "730f2a3668dc6033ff710a4a48e847b98bc412e5",
          "url": "https://github.com/shunk031/dotfiles/commit/f7961505adff783d5390e4f27495c75e2ebbda2c"
        },
        "date": 1750955155395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.06,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.72,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3387026dafb18456514612f3d27b50c3545d5e96",
          "message": "feat: update tmux installation to handle CMake issues on GitHub Actions (#266)",
          "timestamp": "2025-09-13T08:45:22+09:00",
          "tree_id": "c894db93c0826890a5ed947d51a8cbf82bdd4c6d",
          "url": "https://github.com/shunk031/dotfiles/commit/3387026dafb18456514612f3d27b50c3545d5e96"
        },
        "date": 1757720906350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.072,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.78,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b19c8eb6e05127c091a0324b35626367b3426153",
          "message": "feat: update for private dotfiles managed by chezmoi (#265)\n\n* refactor: remove conditional work directory configuration from macos_client.yaml.tmpl\n\n* fix: correct path for SSH config inclusion in private_config\n\n* fix: correct path for workrc in zshrc\n\n* feat: add setup script for private dotfiles on macOS\n\n* feat: enhance init and update commands for chezmoi-private\n\n* feat: refactor macOS setup to use a separate script for private dotfiles\n\n* feat: rename macOS script to run after setting up private dotfiles\n\n* feat: add ssh-agent step for private dotfiles deployment in macOS workflow\n\n* feat: include setup.sh in paths for push and pull_request triggers in macOS and Ubuntu workflows\n\n* feat: integrate private dotfiles initialization into setup.sh and remove obsolete script\n\n* feat: add private dotfiles path declaration and update chezmoi init command\n\n* feat: add SSH agent setup step for private dotfiles deployment in macOS and Ubuntu workflows\n\n* fix: clarify config file usage in private dotfiles initialization",
          "timestamp": "2025-09-13T10:05:27+09:00",
          "tree_id": "0a86cbde38c5c0839b2ecd5c9fc29baf7a0ddfaa",
          "url": "https://github.com/shunk031/dotfiles/commit/b19c8eb6e05127c091a0324b35626367b3426153"
        },
        "date": 1757725723810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.095,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 1.32,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b19c8eb6e05127c091a0324b35626367b3426153",
          "message": "feat: update for private dotfiles managed by chezmoi (#265)\n\n* refactor: remove conditional work directory configuration from macos_client.yaml.tmpl\n\n* fix: correct path for SSH config inclusion in private_config\n\n* fix: correct path for workrc in zshrc\n\n* feat: add setup script for private dotfiles on macOS\n\n* feat: enhance init and update commands for chezmoi-private\n\n* feat: refactor macOS setup to use a separate script for private dotfiles\n\n* feat: rename macOS script to run after setting up private dotfiles\n\n* feat: add ssh-agent step for private dotfiles deployment in macOS workflow\n\n* feat: include setup.sh in paths for push and pull_request triggers in macOS and Ubuntu workflows\n\n* feat: integrate private dotfiles initialization into setup.sh and remove obsolete script\n\n* feat: add private dotfiles path declaration and update chezmoi init command\n\n* feat: add SSH agent setup step for private dotfiles deployment in macOS and Ubuntu workflows\n\n* fix: clarify config file usage in private dotfiles initialization",
          "timestamp": "2025-09-13T10:05:27+09:00",
          "tree_id": "0a86cbde38c5c0839b2ecd5c9fc29baf7a0ddfaa",
          "url": "https://github.com/shunk031/dotfiles/commit/b19c8eb6e05127c091a0324b35626367b3426153"
        },
        "date": 1757726248152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.076,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.91,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7748497f77532d7e5f58027ff24537d2b1bcf5",
          "message": "feat: update workflow paths to include specific YAML files for macOS, Ubuntu, and test workflows (#268)",
          "timestamp": "2025-09-13T10:43:51+09:00",
          "tree_id": "871e2e4c38047d1fdff2f86de8e38a7d347a72e8",
          "url": "https://github.com/shunk031/dotfiles/commit/eb7748497f77532d7e5f58027ff24537d2b1bcf5"
        },
        "date": 1757728027720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.084,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.92,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3543159cfa742a60d9753face8e10843f45997f",
          "message": "feat: update for private dotfiles (#271)\n\n* feat: add support for private dotfiles repository and configuration path\n\n* feat: add client aliases to new script and update zshrc to source it\n\n* feat: add server alias script and update plugin configuration\n\n* fix: update alias for ls command from exa to eza for consistency\n\n* feat: add sourcing for private aliases in zshrc\n\n* feat: add private alias plugin configuration",
          "timestamp": "2025-09-29T00:20:18+09:00",
          "tree_id": "bf3bd907a6f794c8b165ab1fd5c5043dce532645",
          "url": "https://github.com/shunk031/dotfiles/commit/f3543159cfa742a60d9753face8e10843f45997f"
        },
        "date": 1759073003187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.07,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.75,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28ea1227cfcfb8cd4d91e4a4fd64eaf34188d1b4",
          "message": "fix: update private dotfiles config path in setup.sh (#273)",
          "timestamp": "2025-09-29T00:35:54+09:00",
          "tree_id": "e61a64b844bcb3ffcb50b3d6d690834b25896f4e",
          "url": "https://github.com/shunk031/dotfiles/commit/28ea1227cfcfb8cd4d91e4a4fd64eaf34188d1b4"
        },
        "date": 1759074059625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.078,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 1.18,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9138990281942869440ee8eee7df7b80c2a32e4f",
          "message": "feat: add cyberduck to CASK_PACKAGES for improved application management (#272)",
          "timestamp": "2025-09-29T00:47:48+09:00",
          "tree_id": "0ccdf3b41178d43ec7cf431d8d90eee0a8b13bfe",
          "url": "https://github.com/shunk031/dotfiles/commit/9138990281942869440ee8eee7df7b80c2a32e4f"
        },
        "date": 1759074647691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.07,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 0.76,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d6321d5e302e74215b7229caf6e0d72d3219858",
          "message": "feat: use `sheldon` instead of `prezto` (#275)\n\n* feat: add sheldon plugin sources for client and server configurations\n\n* fix: remove plugins.toml from chezmoiignore for server configuration\n\n* Remove commented instructions for customizing the prompt in zshrc\n\n* feat: add client plugin source configurations for macOS, Ubuntu, and Powerlevel10k\n\n* refactor: remove OS specific settings from zshrc\n\n* fix: remove prezto badge from README.md\n\n* refactor: consolidate Go and Rust plugin configurations into common.toml; remove obsolete scripts\n\n* refactor: remove obsolete alias and configuration sources from zshrc\n\n* refactor: remove obsolete .zprezto configurations from macos_client.yaml.tmpl\n\n* refactor: replace gpg.sh with inline function for GPG_TTY in common.toml\n\n* feat: add installation script for Sheldon package manager\n\n* refactor: clean up zshrc by removing obsolete GPG and Rust script sources\n\n* refactor: update chezmoiignore and plugin source configurations for Sheldon\n\n* Add p10k plugin configuration to common.toml\n\n- Introduced a new plugin section for p10k with local path and usage instructions.\n- Updated the powerlevel10k plugin section for better organization.\n\n* feat: add path and fpath functions for client, macOS, server, and common plugins\n\n* feat: add dot_zshrc file and remove symlink template for system-specific zshrc\n\n* refactor: remove obsolete zprofile and zshrc files for client and server\n\n* refactor: consolidate path and fpath settings into dot_zshrc and remove obsolete symlink template\n\n* refactor: remove obsolete dot_profile, dot_zlogin, dot_zlogout, and dot_zshenv files\n\n* fix: replace run-shell with fail for better error handling in dot_tmux.conf.tmpl\n\n* fix: improve error handling in symlink_dot_bashrc.tmpl by replacing echo and exit with fail function\n\n* refactor: remove obsolete dot_zpreztorc file\n\n* fix: update image source in README.md to use relative path\n\n* fix: add terminal-notifier to CASK_PACKAGES for installation\n\n* fix: update printf syntax for email address input in workflow scripts\n\n* feat: add new template for Sheldon installation and remove obsolete Ubuntu script\n\n* feat: add container installation script for macOS\n\n* Revert \"feat: add container installation script for macOS\"\n\nThis reverts commit f4b39115bd19e238f6e1eb61bb06124faab481ff.\n\n* fix: remove obsolete gpg.sh check and add zshrc to file existence tests\n\n* feat: add language configuration for Zsh with LANG environment variable\n\n* fix: update PATH in uv.bats to use local bin directory\n\n* feat: add mise installation script and corresponding test\n\n* fix: remove unused BIN_DIR reference in install_mise and update uninstall_mise path\n\n* fix: change MISE_INSTALL_PATH from readonly to export for accessibility\n\n* fix: comment out pipefail setting in mise.sh for debugging purposes\n\n* refactor: remove nvm installation scripts and related tests\n\n* feat: add mise plugin configuration for managing multiple versions of tools\n\n* fix: update BREW_PACKAGES and CASK_PACKAGES to manage terminal-notifier correctly",
          "timestamp": "2025-10-01T22:29:27+09:00",
          "tree_id": "87f49a844019b39a0ab4cf7437f09e79d7439f2f",
          "url": "https://github.com/shunk031/dotfiles/commit/1d6321d5e302e74215b7229caf6e0d72d3219858"
        },
        "date": 1759325590274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.056,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 6.73,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e7041b35537c6dcfd79006517316477e9619040",
          "message": "Bump webfactory/ssh-agent from 0.9.0 to 0.9.1 (#276)\n\nBumps [webfactory/ssh-agent](https://github.com/webfactory/ssh-agent) from 0.9.0 to 0.9.1.\n- [Release notes](https://github.com/webfactory/ssh-agent/releases)\n- [Changelog](https://github.com/webfactory/ssh-agent/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/webfactory/ssh-agent/compare/v0.9.0...v0.9.1)\n\n---\nupdated-dependencies:\n- dependency-name: webfactory/ssh-agent\n  dependency-version: 0.9.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-03T09:28:00+09:00",
          "tree_id": "6678b86e78a03c368517b5a228f8d53637d50567",
          "url": "https://github.com/shunk031/dotfiles/commit/9e7041b35537c6dcfd79006517316477e9619040"
        },
        "date": 1759451526827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.09,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.76,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d888dc75a8386bfeb6a737e68edcb77902ccdb40",
          "message": "feat: update for chezmoi external (#285)\n\n* feat: update for chezmoiexternal\n\n* feat: update chezmoi external templates for client systems and add Ubuntu support\n\n* feat: update eza configuration in Ubuntu template\n\n* feat: update URL generation for eza and ghq in configuration templates\n\n* feat: fix URL generation for eza by using a variable for architecture\n\n* feat: remove obsolete eza installation script for Ubuntu\n\n* feat: add Go installation configuration and improve ghq extraction command\n\n* feat: refactor configuration templates and add Ubuntu support for eza\n\n* feat: update Go installation path and improve version retrieval method\n\n* feat: update Go installation path in configuration templates\n\n* fix: correct variable syntax for HOME in Go plugin path\n\n* fix: add silent flag to curl command for retrieving Go version\n\n* fix: correct template path for macOS configuration\n\n* fix: remove non-existent fzf directory from existence checks\n\n* fix: add GITHUB_TOKEN to environment variables in macOS and Ubuntu workflows\n\n* fix: comment out test cases in macOS and Ubuntu dotfiles scripts",
          "timestamp": "2025-10-04T00:09:26+09:00",
          "tree_id": "0d9ee73f27fc00fac18e5bfbef17ef42b622005b",
          "url": "https://github.com/shunk031/dotfiles/commit/d888dc75a8386bfeb6a737e68edcb77902ccdb40"
        },
        "date": 1759504363531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.071,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.23,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "452db480b004877982a0611b9740e0de490b5d5e",
          "message": "feat: use GITHUB_TOKEN (#295)\n\n* refactor: replace DOTFILES_GITHUB_PAT with GITHUB_TOKEN in workflow files and scripts\n\n* fix: correct shebang line in setup.sh",
          "timestamp": "2025-10-26T15:56:01+09:00",
          "tree_id": "d5498adcda7190dbd9a29026c14f4515f2a0e7a9",
          "url": "https://github.com/shunk031/dotfiles/commit/452db480b004877982a0611b9740e0de490b5d5e"
        },
        "date": 1761461955628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.063,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 6.99,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33aae58377b8072f7bf29984fb842e998fd551e2",
          "message": "feat: remove ghq installation scripts and tests (#296)\n\n* feat: remove ghq installation scripts and tests\n\n* fix: correct test names for eza and kcov in bats tests\n\n* feat: remove golang installation script and associated tests\n\n* feat: remove golang installation script template",
          "timestamp": "2025-10-30T13:10:10+09:00",
          "tree_id": "4472cf129d15fb0dcc7c1b58ef69ec6fe5d9d57b",
          "url": "https://github.com/shunk031/dotfiles/commit/33aae58377b8072f7bf29984fb842e998fd551e2"
        },
        "date": 1761797607684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.062,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.62,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75ed9c820489327dd5a0150a5304bf0e96c99eca",
          "message": "feat: use mise to install global tools (#310)\n\n* feat: use mise to install global tools\n\n* feat: add aws-cli, bats, and additional cargo tools to mise configuration\n\n* refactor: remove golang installation script and related tests\n\n* refactor: remove GitHub CLI installation scripts and related tests\n\n* refactor: remove bats-core package check from macOS install tests\n\n* refactor: remove AWS CLI installation script and related tests\n\n* refactor: remove hugo from brew packages and tests, add hugo-extended to mise configuration\n\n* refactor: remove Rust installation script and related tests\n\n* refactor: remove uv installation script and related tests\n\n* refactor: remove dotenvx installation script and related tests\n\n* feat: add SSH setup script for Debian-based Linux distributions\n\n* refactor: remove age and jq installation scripts and related tests\n\n* feat: add new script templates for installation and decryption processes; remove deprecated macOS and Ubuntu scripts\n\n* refactor: update install_mise function to activate mise environment instead of using 'mise install'\n\n* refactor: remove deprecated chezmoi installation scripts and related tests for macOS and Ubuntu\n\n* refactor: remove deprecated run_once_after_decrypt-private-key script for macOS\n\n* refactor: replace bats-core installation with mise-action for improved caching and installation\n\n* refactor: update template script path in mise.bats for consistency\n\n* refactor: change fail-on-alert setting to false in benchmark action\n\n* refactor: update config.toml to include eza and yazi tools, remove cargo references\n\n* fix: correct expected number of packages in ubuntu-common test\n\n* refactor: remove shellcheck from package lists in macOS and Ubuntu scripts",
          "timestamp": "2025-12-18T00:28:05+09:00",
          "tree_id": "4ffe764e060fd7ebce8ade298e8c8bbcc3ee82a6",
          "url": "https://github.com/shunk031/dotfiles/commit/75ed9c820489327dd5a0150a5304bf0e96c99eca"
        },
        "date": 1765985473907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.094,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 10.62,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9f22e0f2840104536d201f825541361afa31eba",
          "message": "refactor: separate core dependencies from misc install scripts (#381)\n\n* refactor: separate core dependencies from misc install scripts\n\n* fix: close ubuntu dependencies template condition\n\n* test: update ubuntu common bats for dependencies script\n\n* fix: avoid git package conflict in ubuntu dependencies\n\n* feat: add chezmoiscript for ubuntu client misc install",
          "timestamp": "2026-03-18T10:13:38+09:00",
          "tree_id": "a377e0a87134d5ea1ff7844399a260b3e2d0a0d0",
          "url": "https://github.com/shunk031/dotfiles/commit/b9f22e0f2840104536d201f825541361afa31eba"
        },
        "date": 1773796674300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.109,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.91,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e5450f667940e42844291b66a85da0b6b27a17c",
          "message": "feat(setup): bootstrap private chezmoi initialization (#390)\n\n* feat(setup): bootstrap private chezmoi initialization\n\n* refactor(ssh): extract AcceptEnv setup into helper function\n\n* test(common): make mise template check order-agnostic\n\n* fix(ubuntu): remove sudo from dependency package list\n\n* fix(ubuntu): support apt-get when sudo is unavailable\n\n* fix(ubuntu): bootstrap sudo before apt operations\n\n* chore(shell): format dependencies script for shfmt\n\n* fix(ubuntu): avoid reinstalling existing packages\n\n* test(ubuntu): cover dependencies sudo bootstrap paths",
          "timestamp": "2026-04-06T23:13:27+09:00",
          "tree_id": "4ba0a6922a725d29b399084d92dd52b4de87f8e1",
          "url": "https://github.com/shunk031/dotfiles/commit/2e5450f667940e42844291b66a85da0b6b27a17c"
        },
        "date": 1775485120776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.113,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 9.05,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f369ab8b14e606fe33fb00ece76f40db17c43d8",
          "message": "ci(workflows): guard secretless contexts for private-credential jobs (#394)\n\n* ci(actions): update to node24-compatible actions and guard secretless contexts\n\n* ci(workflows): avoid secret-context expressions in job conditions\n\n* ci(workflows): keep action versions and add secretless-context guards",
          "timestamp": "2026-04-07T00:23:41+09:00",
          "tree_id": "5ef46edeb2a2bb129c9a7803b3e7772950d4991a",
          "url": "https://github.com/shunk031/dotfiles/commit/8f369ab8b14e606fe33fb00ece76f40db17c43d8"
        },
        "date": 1775489352954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.083,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.3,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04dd4de625ee72bf6ce7f4f24c3954ed62665568",
          "message": "chore(deps): bump webfactory/ssh-agent from 0.9.1 to 0.10.0 (#388)\n\nBumps [webfactory/ssh-agent](https://github.com/webfactory/ssh-agent) from 0.9.1 to 0.10.0.\n- [Release notes](https://github.com/webfactory/ssh-agent/releases)\n- [Changelog](https://github.com/webfactory/ssh-agent/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/webfactory/ssh-agent/compare/v0.9.1...v0.10.0)\n\n---\nupdated-dependencies:\n- dependency-name: webfactory/ssh-agent\n  dependency-version: 0.10.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Shunsuke KITADA <shunsuke.kitada.0831@gmail.com>",
          "timestamp": "2026-04-07T00:31:00+09:00",
          "tree_id": "1ac5d82e9ec24c17bcf4250ca2d5223e91be8a1b",
          "url": "https://github.com/shunk031/dotfiles/commit/04dd4de625ee72bf6ce7f4f24c3954ed62665568"
        },
        "date": 1775489808024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.14,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 9.68,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ffb2a9c162a25679f81c8f5774e316c5a4b1dab",
          "message": "chore(deps): bump jdx/mise-action from 3 to 4 (#387)\n\nBumps [jdx/mise-action](https://github.com/jdx/mise-action) from 3 to 4.\n- [Release notes](https://github.com/jdx/mise-action/releases)\n- [Changelog](https://github.com/jdx/mise-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/jdx/mise-action/compare/v3...v4)\n\n---\nupdated-dependencies:\n- dependency-name: jdx/mise-action\n  dependency-version: '4'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Shunsuke KITADA <shunsuke.kitada.0831@gmail.com>",
          "timestamp": "2026-04-07T00:49:38+09:00",
          "tree_id": "3f481525ffa3f9da85ca46ed33034839e5317f6d",
          "url": "https://github.com/shunk031/dotfiles/commit/8ffb2a9c162a25679f81c8f5774e316c5a4b1dab"
        },
        "date": 1775490859164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.073,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.3,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "062f4a5d18db438e4f03507c9f9fcb5e65c6ac9e",
          "message": "feat(tmux): enable native clipboard integration (#401)\n\n* feat(tmux): enable native clipboard integration\n\n* fix(ubuntu): avoid git dependency conflict in tmux install\n\n* test(macos): replace reattach package check with git\n\n* test(ubuntu): cover uninstall_openssh remove path\n\n* test(ubuntu): stabilize uninstall_openssh mock under debug env\n\n* test(ubuntu): make uninstall_openssh assertion robust\n\n* test(ubuntu): add deterministic dependencies coverage cases\n\n* refactor(install): move git and cmake to common dependencies\n\n* fix(ci): disable DOTFILES_DEBUG in test workflow\n\n* test(coverage): cover debug and command-detection branches\n\n* test(coverage): cover additional early-return branches",
          "timestamp": "2026-04-10T18:40:40+09:00",
          "tree_id": "a182bc972311fc9d4097bdda0e50dcfa1ebe0385",
          "url": "https://github.com/shunk031/dotfiles/commit/062f4a5d18db438e4f03507c9f9fcb5e65c6ac9e"
        },
        "date": 1775814403662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.169,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.48,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc603ae2bfd1ae44a455433c23e504d39ef1494e",
          "message": "fix(macos): install tailscale only for shunk031 via homebrew (#404)",
          "timestamp": "2026-04-13T20:09:48+09:00",
          "tree_id": "34db612e4de43d6bfe7f7b0b0c665df07539d0f1",
          "url": "https://github.com/shunk031/dotfiles/commit/dc603ae2bfd1ae44a455433c23e504d39ef1494e"
        },
        "date": 1776078874235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.083,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.52,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c572b9c1886026ebf5cac3918cbe23f9496780b",
          "message": "feat(docs): add generated MkDocs docs pipeline (#405)\n\n* feat(docs): add generated MkDocs docs pipeline\n\n* style(docs): format generated docs script\n\n* fix(docs): install custom shdoc mise plugin\n\n* fix(ci): install gawk for shdoc plugin bootstrap\n\n* docs(agents): require English shdoc comments",
          "timestamp": "2026-04-13T20:42:07+09:00",
          "tree_id": "e7b8b1c7aa4287e669ece57a82947da486645d1d",
          "url": "https://github.com/shunk031/dotfiles/commit/1c572b9c1886026ebf5cac3918cbe23f9496780b"
        },
        "date": 1776080809009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.081,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.68,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2b018ab59e007a564335a37b62a574ec450201f",
          "message": "feat(macos): tap cmux cask repository before install (#385)",
          "timestamp": "2026-04-17T14:33:06+09:00",
          "tree_id": "b041c2c896b0c37e5d1256c2ef85b9ca89c17b20",
          "url": "https://github.com/shunk031/dotfiles/commit/b2b018ab59e007a564335a37b62a574ec450201f"
        },
        "date": 1776404331685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.156,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.52,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b577e25b243963747443be574db950164545df9d",
          "message": "revert(docs): remove generated docs pipeline and Pages deploy (#430)",
          "timestamp": "2026-05-06T15:42:15+09:00",
          "tree_id": "cf9450e1793f6016937a98645aa1c8e767f3ef76",
          "url": "https://github.com/shunk031/dotfiles/commit/b577e25b243963747443be574db950164545df9d"
        },
        "date": 1778050063324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.092,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.63,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ddb5baaac91213b417e1a21728d53857f7694fdd",
          "message": "chore(repo): prepare default-branch migration to main (#434)",
          "timestamp": "2026-05-06T21:07:58+09:00",
          "tree_id": "8b0096a99cd7f75aa695295935e3c9689ff06cd7",
          "url": "https://github.com/shunk031/dotfiles/commit/ddb5baaac91213b417e1a21728d53857f7694fdd"
        },
        "date": 1778069598837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.086,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.92,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddb5baaac91213b417e1a21728d53857f7694fdd",
          "message": "chore(repo): prepare default-branch migration to main (#434)",
          "timestamp": "2026-05-06T21:07:58+09:00",
          "tree_id": "8b0096a99cd7f75aa695295935e3c9689ff06cd7",
          "url": "https://github.com/shunk031/dotfiles/commit/ddb5baaac91213b417e1a21728d53857f7694fdd"
        },
        "date": 1778069624208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.085,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.92,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc9e2bd4078253129a30160a4d6499bb9032a06a",
          "message": "chore(ci): drop temporary master cutover support (#435)",
          "timestamp": "2026-05-06T21:19:10+09:00",
          "tree_id": "1d6fe3fbec641b3709e5b86020155f87ce3a1d52",
          "url": "https://github.com/shunk031/dotfiles/commit/dc9e2bd4078253129a30160a4d6499bb9032a06a"
        },
        "date": 1778070292808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.085,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 9.21,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ff1c15990d9dc72a24d95c189739a287d227729",
          "message": "fix(tmux): commonize allow-passthrough setting (#441)",
          "timestamp": "2026-05-09T16:46:18+09:00",
          "tree_id": "672ef4eb35095daf0b408847e21954f14b1e4577",
          "url": "https://github.com/shunk031/dotfiles/commit/4ff1c15990d9dc72a24d95c189739a287d227729"
        },
        "date": 1778313110907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.102,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.76,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "674d1d8628df4905974b977cf40e9453bb3c3fe8",
          "message": "fix(macos): add cmux to default dock apps (#462)",
          "timestamp": "2026-05-28T00:53:51+09:00",
          "tree_id": "6287cb04d70cb1d1011a9c24cb92c612bb1a9e29",
          "url": "https://github.com/shunk031/dotfiles/commit/674d1d8628df4905974b977cf40e9453bb3c3fe8"
        },
        "date": 1779897593607,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.091,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 10.44,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62e967af3be66c9d1ae7e9c5f4dad5fc981d2a85",
          "message": "feat(macos): add clop to cask packages (#466)",
          "timestamp": "2026-06-08T00:55:59+09:00",
          "tree_id": "cff51e40ea997baf5b4380af99f2bb3162cf4155",
          "url": "https://github.com/shunk031/dotfiles/commit/62e967af3be66c9d1ae7e9c5f4dad5fc981d2a85"
        },
        "date": 1780848044074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.08,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 6.28,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5071e9481127437309d6607362c7ebd77feed565",
          "message": "chore(deps): bump jdx/mise-action from 4 to 4.2.3 (#576)\n\nBumps [jdx/mise-action](https://github.com/jdx/mise-action) from 4 to 4.2.3.\n- [Release notes](https://github.com/jdx/mise-action/releases)\n- [Changelog](https://github.com/jdx/mise-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/jdx/mise-action/compare/v4...v4.2.3)\n\n---\nupdated-dependencies:\n- dependency-name: jdx/mise-action\n  dependency-version: 4.2.3\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-01T23:33:40+09:00",
          "tree_id": "f9243b8a2ce1b4b2fbf197e68602d08711de7254",
          "url": "https://github.com/shunk031/dotfiles/commit/5071e9481127437309d6607362c7ebd77feed565"
        },
        "date": 1785595111864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.085,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.27,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e69e34857255a6b861538a4d023617f3955d9a88",
          "message": "fix(mise): enforce bootstrap compatibility floor (#592)\n\n* fix(mise): enforce bootstrap compatibility floor\n\n* docs(mise): document bootstrap compatibility\n\n* fix(ci): allow empty Ubuntu file test suite",
          "timestamp": "2026-08-05T00:15:40+09:00",
          "tree_id": "91eabee2114da53536bce98b334a0421767c4a36",
          "url": "https://github.com/shunk031/dotfiles/commit/e69e34857255a6b861538a4d023617f3955d9a88"
        },
        "date": 1785856912349,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.09,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 32.2,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f6c8554211e2c37a107c2da751a76801c846331",
          "message": "feat(agents): validate managed guidance with skill evaluations (#594)\n\n* feat(agents): evaluate managed skills with prek\n\n* test(agents): remove obsolete shared guidance assertion\n\n* fix(agents): preserve guidance migration requirements\n\n* fix(ci): fetch guidance migration source history\n\n* test(agents): align worktree guidance assertions\n\n* fix(agents): enforce single guidance ownership\n\n* test(agents): align ownership contract assertion\n\n* fix(claude): skip dangerous mode permission prompt\n\n* revert(claude): remove unrelated settings change",
          "timestamp": "2026-08-08T01:55:13+09:00",
          "tree_id": "f2b5be83127cf42c32c953c500b319ceae412428",
          "url": "https://github.com/shunk031/dotfiles/commit/6f6c8554211e2c37a107c2da751a76801c846331"
        },
        "date": 1786122057297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.08,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 9.23,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d50f710f186aa20f3f6cc67a550cc7671c1e9ed1",
          "message": "feat(mise): require declarative system bootstrap release (#599)\n\n* feat(mise): require declarative bootstrap release\n\n* ci(mise): pin bootstrap-compatible version\n\n* ci(mise): use bootstrapped installation\n\n* ci(mise): disable stale action cache\n\n* ci(mise): restore action cache",
          "timestamp": "2026-08-09T00:08:13+09:00",
          "tree_id": "f64851586845fffb873fc532b99c39879fd6e3d0",
          "url": "https://github.com/shunk031/dotfiles/commit/d50f710f186aa20f3f6cc67a550cc7671c1e9ed1"
        },
        "date": 1786202041987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.142,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 10.47,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "482135a44a6a6e521afd84e2d01853453cedb0df",
          "message": "ci(mise): reuse bootstrapped installation (#601)",
          "timestamp": "2026-08-09T11:26:20+09:00",
          "tree_id": "be1cec8c3ae4c2690aea532f2756d1884f342e94",
          "url": "https://github.com/shunk031/dotfiles/commit/482135a44a6a6e521afd84e2d01853453cedb0df"
        },
        "date": 1786242736936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.098,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 10.24,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a06021e4894468d4511588f5f99ab3dbac362ca",
          "message": "feat(mise): add fnox for Codex authentication (#609)\n\n* feat(mise): add fnox for codex authentication\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* test(mise): avoid tomllib in fnox assertion\n\nCo-authored-by: Codex <noreply@openai.com>\n\n---------\n\nCo-authored-by: Codex <noreply@openai.com>",
          "timestamp": "2026-08-10T16:19:10+09:00",
          "tree_id": "05d8fe79af8344b8a8fe738012abc11d09e82fbb",
          "url": "https://github.com/shunk031/dotfiles/commit/5a06021e4894468d4511588f5f99ab3dbac362ca"
        },
        "date": 1786346650845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.08,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 10.02,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aefb5c7b9dc4f58314b75a908d5790cb2425866f",
          "message": "refactor(tooling): remove legacy proxy tooling (#611)\n\nCo-authored-by: Codex <noreply@openai.com>",
          "timestamp": "2026-08-10T18:33:34+09:00",
          "tree_id": "4fc8ac0a0219d41e91065701d2bc54378678dc4a",
          "url": "https://github.com/shunk031/dotfiles/commit/aefb5c7b9dc4f58314b75a908d5790cb2425866f"
        },
        "date": 1786354833653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.105,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 6.91,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61a8061f11c6c83db516c44b360a8051ecc3d16c",
          "message": "feat: generate RTK integrations during setup (#616)\n\n* feat: add rtk to agent workflows\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* feat(rtk): align quick-start guidance across agents\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* feat(rtk): generate integrations during setup\n\nMove RTK-generated files out of chezmoi source and initialize supported agent integrations after apply.\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* fix(rtk): make the installer standalone\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* refactor(rtk): follow common installer wiring\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* fix(rtk): align installer documentation\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* docs(rtk): remove generated-file notes\n\nCo-authored-by: Codex <noreply@openai.com>\n\n---------\n\nCo-authored-by: Codex <noreply@openai.com>",
          "timestamp": "2026-08-13T10:26:42+09:00",
          "tree_id": "b46881ff1bacb17f38d37bf5403adbcb88ce1295",
          "url": "https://github.com/shunk031/dotfiles/commit/61a8061f11c6c83db516c44b360a8051ecc3d16c"
        },
        "date": 1786584773268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.119,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.1,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a5ae05dc3538d01189370143535431c773b3a0e",
          "message": "Revert \"feat: generate RTK integrations during setup (#616)\" (#621)\n\nThis reverts commit 61a8061f11c6c83db516c44b360a8051ecc3d16c.\n\nCo-authored-by: Codex <noreply@openai.com>",
          "timestamp": "2026-08-13T12:17:31+09:00",
          "tree_id": "4fe7bdc97b2991b8b4a3297609eeb2f2ea2e723f",
          "url": "https://github.com/shunk031/dotfiles/commit/4a5ae05dc3538d01189370143535431c773b3a0e"
        },
        "date": 1786591349581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.081,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 6.93,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebe074ee6cc201b7d87c8d5deb42f09ba39db91d",
          "message": "feat(herdr): sync upstream skill from installed binary (#647)\n\n* feat(herdr): sync upstream skill\n\nCo-authored-by: Codex <noreply@openai.com>\n\n* test(herdr): account for skill availability probe\n\nCo-authored-by: Codex <noreply@openai.com>\n\n---------\n\nCo-authored-by: Codex <noreply@openai.com>",
          "timestamp": "2026-08-17T20:18:26+09:00",
          "tree_id": "f5e5bab6f4dc304a6470625b686cba0cf16c0ca5",
          "url": "https://github.com/shunk031/dotfiles/commit/ebe074ee6cc201b7d87c8d5deb42f09ba39db91d"
        },
        "date": 1786965823072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.09,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 7.3,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a931dc934823fe7bf6fe84da9e5c3d4b4ce46720",
          "message": "feat(mise): manage textlint tools (#667)\n\nCo-authored-by: Codex <noreply@openai.com>",
          "timestamp": "2026-08-25T22:16:13+09:00",
          "tree_id": "896c8fa9d37547b2ab2a84d2b052011901c44a16",
          "url": "https://github.com/shunk031/dotfiles/commit/a931dc934823fe7bf6fe84da9e5c3d4b4ce46720"
        },
        "date": 1787664193973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.126,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 51.89,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ace082039f1e187d39f64827e8e2167217d98cf",
          "message": "feat(guidance): switch the instructions eval gate to shuhari (#665)\n\n* feat(guidance): switch the instructions eval gate to shuhari\n\nMove user-guidance evaluation from `scripts/agent_guidance_eval.py` to\n`shuhari eval instructions`. This is a switch rather than an addition:\n`AGENTS.evals.json` is converted to shuhari's schema, which the Python\nharness cannot read, so every other change here follows from that one.\n\nThe schema drops `version`, `guidance`, and per-case `should_trigger`,\nrenames the target key to `instructions_name`, and makes `expected_output`\nrequired, so each of the five cases gains one.\n\nThe `ordinary-implementation-publish-lifecycle` prompt told the agent to\nread `.agents/AGENTS.md`. That was the Python harness's staging path;\nshuhari's Codex harness writes the file to `AGENTS.md` at the workspace\nroot. Left alone the case would have failed on a missing file instead of\non the behaviour under test.\n\nBecause the Python harness can no longer parse the guidance evals, it stops\nclaiming guidance as a target. Narrowing the two `agent-guidance-*` hook\npatterns to `skills/` is not enough on its own: staging guidance together\nwith a skill would still fire the skills hook, which then resolves guidance\nthrough `--staged` and fails. The in-tree skills keep that harness and their\ngate unchanged.\n\nAlso fixes two Pyright errors that predate this change. They are one root\ncause: `codex_settings_kwargs` returned `dict[str, str]`, so at the\n`**` unpack site every keyword widened to `str` and the non-`str`\nparameters `schema: Path | None` and `search: bool` looked like type\nerrors. A `CodexSettings` TypedDict gives the unpack known keys.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\n\n* chore(gitignore): never commit shuhari workspace artifacts\n\nRunning `shuhari eval instructions` writes `<target>-workspace/` beside the\nevaluated target, which for this repository's guidance lands at\n`home/dot_config/user-guidance-workspace/`. Those directories hold verbatim\nagent transcripts and nothing here excluded them, so a single `git add -A`\nwould have committed them.\n\nMatched repository-wide rather than at the one observed path, because the\nlocation follows whatever target shuhari is pointed at next.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-26T02:05:13+09:00",
          "tree_id": "5f151f97274504341e18f689d82e3de2586d46b6",
          "url": "https://github.com/shunk031/dotfiles/commit/8ace082039f1e187d39f64827e8e2167217d98cf"
        },
        "date": 1787677850652,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.084,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 9.74,
            "unit": "Second"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shunsuke.kitada.0831@gmail.com",
            "name": "Shunsuke KITADA",
            "username": "shunk031"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "719d2d2469e249f153de20c432138d29e2c4df8e",
          "message": "feat(macos): add 1Password to Dock\n\nCo-authored-by: Codex <noreply@openai.com>",
          "timestamp": "2026-09-01T14:36:02+09:00",
          "tree_id": "0e21dba89fa356ff14290f321cc08323f66f1148",
          "url": "https://github.com/shunk031/dotfiles/commit/719d2d2469e249f153de20c432138d29e2c4df8e"
        },
        "date": 1788241272242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh average startup time",
            "value": 0.091,
            "unit": "Second"
          },
          {
            "name": "zsh initial startup time",
            "value": 8.72,
            "unit": "Second"
          }
        ]
      }
    ]
  }
}