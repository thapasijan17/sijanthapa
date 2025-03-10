{ pkgs, package-json }:
pkgs.buildNpmPackage {
  pname = package-json.name;
  inherit (package-json) version;
  src = ../.;
  npmDeps = pkgs.importNpmLock { npmRoot = ../.; };
  inherit (pkgs.importNpmLock) npmConfigHook;
  buildPhase = ''
    npm install
    npm run build
    mkdir $out
    mv build $out
    rm -rf $out/lib
    mv $out/build/* $out
    rmdir $out/build
  '';
}
