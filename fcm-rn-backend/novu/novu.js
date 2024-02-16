import { Novu, PushProviderIdEnum } from '@novu/node'

export const newNotif = async (payloadTitle, payloadBody) => {

    const novu = new Novu("<Add your API Key here>");
    console.log('instance created')

    await novu.subscribers.identify('<Add your subscriber id here>', {
        firstName: "RNA"
    });
    console.log('sub created')

    await novu.subscribers.setCredentials('newSubForRNA', PushProviderIdEnum.FCM, {
        deviceTokens: ['<Add your device token here>'],
    });
    console.log('set cred')

    try {
        // console.log(payloadBody, payloadTitle)
        await novu.trigger('rna-2', {
            to: {
                subscriberId: 'newSubForRNA'
            },
            payload: {
                title: payloadTitle,
                body: payloadBody
            },
            overrides: {
                fcm: {
                    android: {
                        notification: {
                            imageUrl: '<Add image URL here>',
                        },
                        data: {
                            subStatus: "true"
                        },
                        notification: {
                            priority: 'low'
                        }
                    }
                }
            }
        });

    } catch (error) {
        console.log('error is this: ', error)
    }

    console.log('triggered')
}
