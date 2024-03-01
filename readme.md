# MicroUUID
Converts UUIDs into a shortened URL-encodeable form. 

Now you can use shorter URLs!
```
https://example.com/offer/7f6e5313-2103-431c-b299-769f7db25008 → https://example.com/offer/IhfFAYArMGYYLVcIIWEMat
```

```
import { shorten, expand } from '@acryps/micro-uuid';

// create a cool short link to an offer
const linkButton = <ui-button ui-href={`/offer/${shorten(offer.id)}`}>
	{offer.name}
</ui-button>;

// get the offer by UUID from the link
const offer = await offerService.find(expand(parameters.id));
```

The encoding uses a base64-esque form (using 63 = - and 64 = _). The mapping has been picked randomly.
