window.BENCHMARK_DATA = {
  "lastUpdate": 1677307813380,
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
      }
    ]
  }
}