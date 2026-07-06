import {
  WatermarkImageBaseConfig,
  WatermarkService,
  WatermarkTextBaseConfig
} from "./chunk-AUVVHWQQ.js";
import {
  FEnum,
  FUniver
} from "./chunk-FNWLVP5P.js";
import {
  IWatermarkTypeEnum
} from "./chunk-NKLVFE4S.js";

// ../packages/watermark/src/facade/f-univer.ts
var FWatermarkEnumMixin = class extends FEnum {
  get IWatermarkTypeEnum() {
    return IWatermarkTypeEnum;
  }
};
var FUniverWatermarkMixin = class extends FUniver {
  addWatermark(type, config) {
    const watermarkService = this._injector.get(WatermarkService);
    if (type === "text" /* Text */) {
      watermarkService.updateWatermarkConfig({
        type: "text" /* Text */,
        config: {
          text: {
            ...WatermarkTextBaseConfig,
            ...config
          }
        }
      });
    } else if (type === "image" /* Image */) {
      watermarkService.updateWatermarkConfig({
        type: "image" /* Image */,
        config: {
          image: {
            ...WatermarkImageBaseConfig,
            ...config
          }
        }
      });
    } else {
      throw new Error("Unknown watermark type");
    }
    return this;
  }
  deleteWatermark() {
    const watermarkService = this._injector.get(WatermarkService);
    watermarkService.deleteWatermarkConfig();
    return this;
  }
};
FUniver.extend(FUniverWatermarkMixin);
FEnum.extend(FWatermarkEnumMixin);
