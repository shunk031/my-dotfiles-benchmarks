window.BENCHMARK_DATA = {
  "lastUpdate": 1715470036372,
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
      }
    ]
  }
}