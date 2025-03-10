{
  inputs = { nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable"; };

  outputs = { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
      package-json = builtins.fromJSON (builtins.readFile ./package.json);
    in {
      packages.${system} = {
        default =
          pkgs.callPackage ./nix/default.nix { inherit pkgs package-json; };
      };
    };
}
