import React from 'react';

function height (props) {

        return (
            <div>                               
                    <select onChange={props.minHeightChange} value={props.minHeight}>
                        <option value="121">4ft</option>
                        <option value="124">4ft 1in</option>
                        <option value="127">4ft 2in</option>
                        <option value="129">4ft 3in</option>
                        <option value="132">4ft 4in</option>
                        <option value="134">4ft 5in</option>
                        <option value="137">4ft 6in</option>
                        <option value="139">4ft 7in</option>
                        <option value="142">4ft 8in</option>
                        <option value="144">4ft 9in</option>
                        <option value="147">4ft 10in</option>
                        <option value="149">4ft 11in</option>
                        <option value="152">5ft</option>
                        <option value="154">5ft 1in</option>
                        <option value="157">5ft 2in</option>
                        <option value="160">5ft 3in</option>
                        <option value="162">5ft 4in</option>
                        <option value="165">5ft 5in</option>
                        <option value="167">5ft 6in</option>
                        <option value="170">5ft 7in</option>
                        <option value="172">5ft 8in</option>
                        <option value="175">5ft 9in</option>
                        <option value="177">5ft 10in</option>
                        <option value="180">5ft 11in</option>  
                        <option value="182">6ft</option>
                        <option value="185">6ft 1in</option>
                        <option value="187">6ft 2in</option>
                        <option value="190">6ft 3in</option>
                        <option value="193">6ft 4in</option>
                        <option value="195">6ft 5in</option>
                        <option value="198">6ft 6in</option>
                        <option value="200">6ft 7in</option>
                        <option value="203">6ft 8in</option>
                        <option value="205">6ft 9in</option>
                        <option value="208">6ft 10in</option>
                        <option value="210">6ft 11in</option>  
                        <option value="213">7ft</option>                               
                    </select>   
                        <label>&nbsp;to&nbsp;</label>  
                    <select onChange={props.maxHeightChange} value={props.maxHeight}>
                        <option value="121">4ft</option>
                        <option value="124">4ft 1in</option>
                        <option value="127">4ft 2in</option>
                        <option value="129">4ft 3in</option>
                        <option value="132">4ft 4in</option>
                        <option value="134">4ft 5in</option>
                        <option value="137">4ft 6in</option>
                        <option value="139">4ft 7in</option>
                        <option value="142">4ft 8in</option>
                        <option value="144">4ft 9in</option>
                        <option value="147">4ft 10in</option>
                        <option value="149">4ft 11in</option>
                        <option value="152">5ft</option>
                        <option value="154">5ft 1in</option>
                        <option value="157">5ft 2in</option>
                        <option value="160">5ft 3in</option>
                        <option value="162">5ft 4in</option>
                        <option value="165">5ft 5in</option>
                        <option value="167">5ft 6in</option>
                        <option value="170">5ft 7in</option>
                        <option value="172">5ft 8in</option>
                        <option value="175">5ft 9in</option>
                        <option value="177">5ft 10in</option>
                        <option value="180">5ft 11in</option>  
                        <option value="182">6ft</option>
                        <option value="185">6ft 1in</option>
                        <option value="187">6ft 2in</option>
                        <option value="190">6ft 3in</option>
                        <option value="193">6ft 4in</option>
                        <option value="195">6ft 5in</option>
                        <option value="198">6ft 6in</option>
                        <option value="200">6ft 7in</option>
                        <option value="203">6ft 8in</option>
                        <option value="205">6ft 9in</option>
                        <option value="208">6ft 10in</option>
                        <option value="210">6ft 11in</option>  
                        <option value="213">7ft</option>                               
                    </select>   
            </div>
        );
}

export default height;

