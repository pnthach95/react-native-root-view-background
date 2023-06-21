
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRootViewBackgroundSpec.h"

@interface RootViewBackground : NSObject <NativeRootViewBackgroundSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RootViewBackground : NSObject <RCTBridgeModule>
#endif

@end
