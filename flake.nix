{
  description = "Graph UnB, a way to visualize your subjects and dependencies at UnB.";

  inputs = 
    {
      nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    };

  outputs = { self, nixpkgs, ...}@inputs:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { system = system; config.allowUnfree = true;};
  in
  {
    devShells.${system}.default = 
		pkgs.mkShell 
		{
          nativeBuildInputs = with pkgs; [
            nodejs
            pnpm
    	];

    	shellHook = ''
          echo -e "Dev shell opened with success!\nHave a great developing!"
        '';
    };
  };
}
