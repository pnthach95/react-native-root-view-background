#import "RootViewBackground.h"

@implementation RootViewBackground

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(setBackground:(float)red green:(float)green blue:(float)blue alpha:(float)alpha)
{
    dispatch_async( dispatch_get_main_queue(), ^{
        UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
        rootViewController.view.backgroundColor = [[UIColor alloc] initWithRed:red/255 green:green/255 blue:blue/255 alpha:alpha];
    });
}

RCT_EXPORT_MODULE()

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRootViewBackgroundSpecJSI>(params);
}
#endif

@end
