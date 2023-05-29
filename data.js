window.BENCHMARK_DATA = {
  "lastUpdate": 1685323639039,
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
      }
    ]
  }
}