window.BENCHMARK_DATA = {
  "lastUpdate": 1677504256449,
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
      }
    ]
  }
}