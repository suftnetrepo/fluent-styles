import React, { forwardRef } from "react";

const styled = (Component, { base, variants } = {}) => {
  return forwardRef((props, ref) => {
    const styles = { ...(base || {}) };
    const options = props;

    Object.keys(variants || {}).forEach((category) => {
      const variantSelected = options[category];
      const variantValue = variants[category];

      if (typeof variantValue === "function") {
        const style = variantValue(variantSelected, options);
        if (style) {
          Object.assign(styles, style);
        }
      } else if (
        variantSelected &&
        typeof variantSelected === "string" &&
        variantSelected.includes(".")
      ) {
        const value = getNestedVariant(variantValue, variantSelected);
        if (value) {
          Object.assign(
            styles,
            typeof value === "string" ? { [category]: value } : value
          );
        }
      } else if (variantValue && variantValue[variantSelected]) {
        const value = variantValue[variantSelected];
        Object.assign(
          styles,
          typeof value === "function" ? value(options) : value
        );
      }
    });  

    return <Component {...props} style={styles} ref={ref}  />;
  });
};

function getNestedVariant(object, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], object);
}

export { styled }
