export const
  throwIfAlreadyLoaded = (parentModule: any, moduleName: string): any => {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import ${moduleName} in the AppModule only.`);
    }
  };
